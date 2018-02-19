// Event handlers

var g_currentCurrency = ""; // Reference currency in use by the user

function CurrencySelector(_event)
{
    let currency = _event.target.currency;
    console.log("CurrencySelector called for " + currency);    

    if (currency && g_currentCurrency != currency)
    {
        g_currentCurrency = currency;

        let elements = document.getElementsByClassName("ReferenceFiatCurrency");
        for (e of elements)
        {
            e.innerText = ConvertCurrencyNameToSymbol(g_currentCurrency);
        }

        console.log("CurrencySelector - Replaced all symbols");
    }
}

// Utility functions

function InsertCurrentCurrencySign(id)
{
    document.getElementById(id).innerText = ConvertCurrencyNameToSymbol(g_currentCurrency);
}

function ConvertCurrencyNameToSymbol(_name)
{
    switch (_name)
    {
        case "EUR":
            return "\u20AC";

        case "GBP":
            return  "\u00A3";

        case "USD":
            return "$";

        default:
            return "undefined";
    }
}

// Main script

console.log("script loaded");

// Set event listeners
var element = document.getElementById("CurrencySelectorEUR");
element.currency = "EUR";
element.addEventListener('click', CurrencySelector, false);

element     = document.getElementById("CurrencySelectorGBP");
element.currency = "GBP";
element.addEventListener('click', CurrencySelector, false);

element     = document.getElementById("CurrencySelectorUSD");
element.currency = "USD";
element.addEventListener('click', CurrencySelector, false);

// Modify page
const init_currency = "EUR";
CurrencySelector({"target" : {"currency" : init_currency}});