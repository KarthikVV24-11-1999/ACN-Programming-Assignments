#!/bin/bash
var="hop dist relb degree"
if [ $# -lt 2 ]
then
	echo "Format: ./script.sh topology_file_path connections_file_path"
else
	for i in {0,1}; do
		for val in $var; do
			routingtablefile="output/${val}_${i}_routingtable.txt"
			forwardingfile="output/${val}_${i}_forwardingtable.txt"
			pathsfile="output/${val}_${i}_paths.txt"
			exec python run.py $1 $2 $routingtablefile $forwardingfile $pathsfile $val $i  &  
		done
	done
fi