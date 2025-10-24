from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import Select
import time

# Path ke chromedriver.exe
service = Service(r"C:\Users\user\Downloads\chromedriver-win64\chromedriver-win64\chromedriver.exe")

# Buat browser dengan service
driver = webdriver.Chrome(service=service)

# Automasi login dan sort
driver.get("https://www.saucedemo.com/")
driver.find_element(By.ID, "user-name").send_keys("standard_user")
driver.find_element(By.ID, "password").send_keys("secret_sauce")
driver.find_element(By.ID, "login-button").click()

time.sleep(2)

# Validasi login berhasil
if "inventory.html" in driver.current_url:
    print("✅ Login berhasil")
else:
    print("❌ Login gagal")

sort_dropdown = Select(driver.find_element(By.CLASS_NAME, "product_sort_container"))
sort_dropdown.select_by_visible_text("Name (A to Z)")

time.sleep(2)

# Ambil semua nama produk
product_names = driver.find_elements(By.CLASS_NAME, "inventory_item_name")
names = [p.text for p in product_names]

# Cek apakah sudah urut
if names == sorted(names):
    print("✅ Produk sudah diurutkan dari A-Z")
else:
    print("❌ Produk belum terurut dengan benar")
    
input("Tekan Enter untuk menutup browser...")
print("Automasi selesai. Browser akan tetap terbuka.")
input("Tekan Enter untuk menutup browser...")
# driver.quit()  ← bisa kamu aktifkan lagi nanti