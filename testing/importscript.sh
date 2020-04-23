sudo apt-get install mongo-tools
mongoimport --type csv -d poc-intake -c poc --headerline --drop ./testing/test.csv
