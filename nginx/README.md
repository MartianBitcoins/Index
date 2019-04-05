# Nginx

`docker run --name proxy --network=mbi-network -p 80:80 -v $(pwd)/nginx.conf:/etc/nginx/nginx.conf:ro -v $(pwd)/../admin-web-app/build:/data/admin-web-app:ro nginx:1.14.2-alpine`