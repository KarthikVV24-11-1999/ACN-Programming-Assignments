#!/bin/bash
if [ $# -lt 7 ]
then
	echo "Format: ./sample.sh topology_file_path connections_file_path routingtable_file_path forwardingtable_file_path paths_file_path metric optimism"
else
	exec python run.py $1 $2 $3 $4 $5 $6 $7
fi