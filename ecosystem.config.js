module.exports = {
    apps : [
        {
            name: "FlibustaBot",
            script: "./FlibustaBot.js",
            env: {
                "LANG_FILE": "./ru.templang",
                "CALLBACK_API_CONFIRMATION_TOKEN": "5553535",
                "CALLBACK_API_PATH": "/callback_api/",
                "FLIBUSTA_HOST": "http://flibusta.is",
                "PROJECT_HOST": "https://fb.bot-x.me",
                "ACCESS_TOKEN": "88005553535",
                "PROJECT_LINK": "https://vk.me/f_bot",
                "PORT": 80
            }
        }
    ]
}
