/* udpclient.c */ 

#include <sys/types.h>
#include <sys/socket.h>
#include <netinet/in.h>
#include <arpa/inet.h>
#include <netdb.h>
#include <stdio.h>
#include <unistd.h>
#include <errno.h>
#include <string.h>
#include <stdlib.h>
#include <signal.h>
/*
Command Line Arguments
Port No :argv[1]
Host's Name :argv[2]
*/

int sock;
struct sockaddr_in server_addr;
struct hostent *host;
int bytes_read;
socklen_t addr_len;
char recv_data[1024];
char* send_data;
size_t size = 40;

void Receiving(){
  bytes_read = recvfrom(sock,recv_data,1024,0,(struct sockaddr *)&server_addr, &addr_len);
  recv_data[bytes_read] = '\0';

  printf("%s: ",inet_ntoa(server_addr.sin_addr));
  printf("%s", recv_data);
  printf("\n");
  fflush(stdout);
}

void Sending() {
  getline (&send_data, &size, stdin);

  if ((strcmp(send_data , "exit\n") == 0) || strcmp(send_data , "quit\n") == 0){
    kill(0, SIGKILL);
    kill(1, SIGKILL);
  }

  else
    sendto(sock, send_data, strlen(send_data), 0,
      (struct sockaddr *)&server_addr, sizeof(struct sockaddr));
  printf("\n");
}

int main(int argc,char *argv[]){

  if(argc<2){
    printf("Command: ./client <Portno.> <hostname>");
    exit(0);	
  }

  host = (struct hostent *) gethostbyname((char *)argv[2]);

  if ((sock = socket(AF_INET, SOCK_DGRAM, 0)) == -1) {
    perror("socket");
    exit(1);
  }

  server_addr.sin_family = AF_INET;
  server_addr.sin_port = htons(atoi(argv[1]));
  server_addr.sin_addr = *((struct in_addr *)host->h_addr);
  bzero(&(server_addr.sin_zero),8);

  Sending();
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