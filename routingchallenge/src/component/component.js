const React = require('react');

module.exports = React.createClass({
    displayName: 'Apple-Stuff',
    _handleClick: function() {
        alert();
    },
    render: function() {
        return (
            <html>
                <head>
                    <title>{ this.props.title }</title>
                    <link rel='stylesheet' href='/style.css' />    //don't forget to add styling
                </head>
                <body>
                    <div>
                        <h1>{this.props.title}</h1>
                        <p>I hope this shows something</p>
                        <button onClick={this._handleClick}>Click Me</button>
                    </div>
                </body>
            </html>
        );
    }
});