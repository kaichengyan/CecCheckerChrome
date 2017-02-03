var cecprefix = "https://www.washington.edu/cec/";
var cecsuffix = "-toc.html";

chrome.omnibox.onInputChanged.addListener(
    function(text, suggest) {
        suggest([
            {content: "cse", description: "[course]"},
        ]);
    }
);

chrome.omnibox.onInputEntered.addListener(
    function(text) {
        var initial = text.trim().toLowerCase().charAt(0);
        if (initial >= 'a' && initial <= 'z') {
            window.open(cecprefix + initial + cecsuffix);
        }
        else alert("Error: unknown course.");
    }
);
