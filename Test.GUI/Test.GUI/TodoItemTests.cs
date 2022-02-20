using NUnit.Framework;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using System;

namespace Test.GUI
{
    public class TodoItemsTests
    {
        ChromeDriver _browser = null;

        [SetUp]
        public void Setup()
        {
            ChromeOptions options = new ChromeOptions();
            _browser = new ChromeDriver(options);
        }

        [TearDown]
        public void TearDown()
        {
            //_browser.Quit();
        }

    }
}