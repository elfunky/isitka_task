const webAuth = require('../helpers/webAuth');

class IndexController {
    /**
     * Method To Render Index Page
     */
    renderPage = [
        webAuth,
        async (req, res) => {
            return res.render("index", { title: "Index Page" });
        }
    ];

    /**
     * Method To Render Index Page
     */
    // renderPage = [
    //     auth,
    //     async(req, res)=>{
    //         return res.render("index");
    //     }
    // ]
}

module.exports = new IndexController();