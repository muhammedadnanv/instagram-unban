const puppeteer = require('puppeteer');

async function unbanInstagramAccount(username, password) {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Navigate to Instagram login page
    await page.goto('https://www.instagram.com/accounts/login/');

    // Enter username and password
    await page.type('input[name="username"]', username);
    await page.type('input[name="password"]', password);

    // Click on the login button
    await page.click('button[type="submit"]');

    // Wait for the login process to complete
    await page.waitForNavigation();

    // Check if the account is banned
    const isBanned = await page.evaluate(() => {
      const errorBanner = document.querySelector('.error-container');
      return errorBanner ? true : false;
    });

    if (isBanned) {
      // Click on the "Learn More" link to appeal the ban
      await page.click('a[href="/accounts/bad_password/"]');

      // Fill in the appeal form with relevant information
      await page.type('textarea[name="additional_info"]', 'Please review my account ban and reinstate it.');

      // Submit the appeal form
      await page.click('button[type="submit"]');

      console.log('Appeal submitted successfully. Please wait for Instagram to review your request.');

    } else {
      console.log('Account is not banned. No action required.');
    }

    // Close the browser
    await browser.close();

  } catch (error) {
    console.error('An error occurred:', error);
  }
}

// Usage example
unbanInstagramAccount('your_username', 'your_password');
