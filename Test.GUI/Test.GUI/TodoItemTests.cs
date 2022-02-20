using NUnit.Framework;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using System;

namespace Test.GUI
{
    public class TodoItemsTests
    {
        ChromeDriver _browser = null;
        string _url = null;

        [SetUp]
        public void Setup()
        {
            ChromeOptions options = new ChromeOptions();
            _browser = new ChromeDriver(options);

            // Niklas laptop
            _url = @"file:///C:/Git/Teknikh%C3%B6gskolan/Frontend/Gruppuppgift%203%20-%20Todolist/TodoMVC/TodoMVC/index.html?";

            // Sussannahs computer
            //_url = @"";
        }

        [TearDown]
        public void TearDown()
        {
            _browser.Quit();
        }

        [Test]
        public void EnterTodoItem()
        {
            string itemName = "test 123";

            _browser.Navigate().GoToUrl(_url);

            var searchbox = _browser.FindElement(By.Id("input-bar"));
            searchbox.SendKeys(itemName);
            searchbox.SendKeys(Keys.Enter);

            _browser.Manage().Timeouts().ImplicitWait = TimeSpan.FromMilliseconds(500);

            var list = _browser.FindElement(By.Id("todo-list"));
            var text = list.FindElement(By.CssSelector("li label")).Text;

            Assert.AreEqual(itemName, text);
        }

    }
}