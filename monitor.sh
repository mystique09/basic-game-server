#! /bin/sh

while [ true ]
do
  echo "Monitoring service...";
  if [ $(pgrep -x "npm start" | grep -o . | wc -l) -eq 0 ]
  then
    echo "Sercice not running.";
    npm start;
  fi
  echo "Service already running.";
  sleep 1m;
done