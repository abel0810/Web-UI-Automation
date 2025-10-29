from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import Select
import time

# Setup browser
driver = webdriver.Chrome()
driver.get("https://www.saucedemo.com/")

# Login
driver.find_element(By.ID, "user-name").send_keys("standard_user")
driver.find_element(By.ID, "password").send_keys("secret_sauce")
driver.find_element(By.ID, "login-button").click()

time.sleep(2)  # Tunggu halaman selesai load

# Sort produk dari A-Z
sort_dropdown = Select(driver.find_element(By.CLASS_NAME, "product_sort_container"))
sort_dropdown.select_by_visible_text("Name (A to Z)")

time.sleep(2)  # Tunggu sorting selesai

# Tutup browser
driver.quit()