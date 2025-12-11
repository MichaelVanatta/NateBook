docker run --name NateBook -p 127.0.0.1:5432:5432 -e POSTGRES_PASSWORD=nathanandnathan -d postgres
echo "Run makeytable.sql in server/setup"