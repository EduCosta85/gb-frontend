import {createMuiTheme} from "@material-ui/core";

export default createMuiTheme({
    "palette": {
        "common": {
            "black": "#000",
            "white": "#fff"
        },
        "background": {
            "paper": "#fff",
            "default": "rgba(0, 0, 0, 1)"
        },
        "primary": {
            "light": "rgba(252, 163, 17, 0.4)",
            "main": "rgba(252, 163, 17, 1)",
            "dark": "rgba(154, 99, 9, 1)",
            "contrastText": "#fff"
        },
        "secondary": {
            "light": "rgba(20, 33, 61, 0.54)",
            "main": "rgba(20, 33, 61, 1)",
            "dark": "rgba(12, 26, 51, 1)",
            "contrastText": "#fff"
        },
        "error": {
            "light": "#e57373",
            "main": "#f44336",
            "dark": "#d32f2f",
            "contrastText": "#fff"
        },
        "text": {
            "primary": "rgba(255, 255, 255, 1)",
            "secondary": "rgba(155, 155, 155, 1)",
            "disabled": "rgba(0, 0, 0, 0.38)",
            "hint": "rgba(0, 0, 0, 0.38)"
        }
    }
});
