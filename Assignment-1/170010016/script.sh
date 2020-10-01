#!/bin/bash
if [ $# -lt 2 ]
then
	echo "Invalid arguments"
else 
	if [ "$1" = "client" ];
	then
		if [ $# -eq 3 ]
		then 
			exec gcc udpclient.c -o client &
			sleep 1
			exec ./$1 $2 $3
		else 
			echo "Run: ./script.sh client <Port Number> <Host Name>"
		fi
	else 
		if [ "$1" = "server" ];
		then
			if [ $# -eq 2 ]
			then 
				exec gcc udpserver.c -o server &
				sleep 1
				exec ./$1 $2
			else 
				echo "Run: ./script.sh server <Port Number>"
			fi
		else
			echo "Invalid arguments"
		fi
	fi
fi