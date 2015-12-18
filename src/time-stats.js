const React = require('react');
const ReactDOM = require('react-dom');
const Card = require('material-ui/lib/card/card');
const CardActions = require('material-ui/lib/card/card-actions');
const CardExpandable = require('material-ui/lib/card/card-expandable');
const CardHeader = require('material-ui/lib/card/card-header');
const CardMedia = require('material-ui/lib/card/card-media');
const CardText = require('material-ui/lib/card/card-text');
const CardTitle = require('material-ui/lib/card/card-title');
const FontIcon = require('material-ui/lib/font-icon');

module.exports = React.createClass({
    render: function() {
        return (
            <Card>
                <CardText>
                    <i className="material-icons">#</i> {this.props.numberEntries}
                    <i className="material-icons">timer</i> {this.props.totalTime}
                    <i className="material-icons">timer</i> {this.props.avgLength}
                </CardText>
            </Card>
        );
    }
});
