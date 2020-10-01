/* udpserver.c */ 

#include <sys/types.h>
#include <sys/socket.h>
#include <netinet/in.h>
#include <arpa/inet.h>
#include <stdio.h>
#include <unistd.h>
#include <errno.h>
#include <string.h>
#include <stdlib.h>
#include <signal.h>
/*
Port No has to be given as command line argument 
*/

int sock;
int bytes_read;
socklen_t addr_len;
struct sockaddr_in server_addr, client_addr;
char recv_data[1024];
char* send_data;
size_t size = 40;

void Sending(){
  getline (&send_data, &size, stdin);

  if ((strcmp(send_data , "exit\n") == 0) || strcmp(send_data , "quit\n") == 0){
    kill(0, SIGKILL);
    kill(1, SIGKILL);
  }

  else
    sendto(sock, send_data, strlen(send_data), 0,
      (struct sockaddr *)&client_addr, sizeof(struct sockaddr));
  printf("\n");
}

void Receiving() {
  bytes_read = recvfrom(sock,recv_data,1024,0,(struct sockaddr *)&client_addr, &addr_len);
  recv_data[bytes_read] = '\0';

  printf("%s: ",inet_ntoa(client_addr.sin_addr));
  printf("%s", recv_data);
  printf("\n");
  fflush(stdout);
}

int main(int argc,char *argv[]){

  if(argc<2){
     printf("Command: ./server <Portno.>");
     exit(0); 
  }

  if((sock = socket(AF_INET, SOCK_DGRAM, 0)) == -1) {
      perror("Socket");
      exit(1);
  }

  server_addr.sin_family = AF_INET;
  server_addr.sin_port = htons(atoi(argv[1]));
  server_addr.sin_addr.s_addr = INADDR_ANY;
  bzero(&(server_addr.sin_zero),8);

  if (bind(sock,(struct sockaddr *)&server_addr, sizeof(struct sockaddr)) == -1){
    perror("Bind");
    exit(1);
  }

  addr_len = sizeof(struct sockaddr);
    
  printf("\nUDPServer Waiting for client on port %s\n",argv[1]);
  fflush(stdout);

  Receiving();
  pid_t  pid;
  pid = fork();
  while (1){
    if (pid == 0) 
        Receiving();
    else 
        Sending();
  }
  return 0;
}