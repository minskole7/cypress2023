// from selenium import webdriver
// from selenium.webdriver.common.by import By
// from selenium.webdriver.common.keys import Keys

// def select_date(driver, month, year, date):
//     driver.find_element(By.ID, "datepicker").click()
    
//     while True:
//         text = driver.find_element(By.CLASS_NAME, "datepicker-switch").text
//         print(text)
//         actual_month, actual_year = text.split(" ")
//         print(actual_month)
//         print(actual_year)

//         if actual_month == month and actual_year == year:
//             break

//         driver.find_element(By.CLASS_NAME, "next").click()

//     actual_dates = driver.find_elements(By.CLASS_NAME, "day")

//     for actual_date in actual_dates:
//         if actual_date.text == date:
//             actual_date.click()
//             break

// # Set the path to your ChromeDriver executable
// chrome_driver_path = "C:\\Users\\joshi\\OneDrive\\Desktop\\chromedriver\\chromedriver\\chromedriver.exe"

// # Create a Chrome driver
// driver = webdriver.Chrome(executable_path=chrome_driver_path)

// # Navigate to the desired webpage
// driver.get("https://www.webdriveruniversity.com/Datepicker/index.html")

// # Call the select_date function
// select_date(driver, "June", "2023", "20")

// # Close the browser
// driver.quit()
