@echo off
php artisan migrate:refresh
php artisan db:seed --class=RolSeeder
php artisan db:seed --class=UserSeeder
php artisan db:seed --class=RolUsuarioSeeder
php artisan db:seed --class=LoteSeeder
php artisan db:seed --class=LoteUserSeeder
php artisan db:seed --class=ComponenteSeeder 
php artisan db:seed --class=InventarioSeeder
php artisan db:seed --class=RecetaSeeder
