// Page Object Model for https://quotes.toscrape.com/login

// Improvement needed
// For each web application page should be a separate JavaScript class (Page Object Model) for that page

exports.LoginPage = class LoginPage {

  constructor(page) {
    this.page = page
    this.username_textbox = page.getByLabel('Username')
    this.password_textbox = page.getByLabel('Password')
    this.login_button = page.getByRole('button', { name: 'Login' })

  }

  async gotoLoginPage() {
    await this.page.goto('https://quotes.toscrape.com/login');
  }

  async login(username, password) {
    await this.username_textbox.fill(username)
    await this.password_textbox.fill(password)
    await this.login_button.click()
  }

}
