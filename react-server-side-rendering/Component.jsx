var React = require('react');

module.exports = React.createClass({
    _handleClick: function(){
        alert();
    },

    render: function () {
        console.log("Helllo");
        return (
            <html>
                <head>
                    <title>Universal App with React</title>
                    <link rel="stylesheet" href="/style.css"/>
                </head>
                <body>
                    <div>
                        <h1>Hello World!</h1>
                        <form action="/" method="POST">
                            <input type="text" name="name" />
                            <button type="submit" onClick={this._handleClick}>Submit</button>
                        </form>
                    </div>
                    <script src="bundle.js"></script>
                </body>
            </html>
        )
    }
});