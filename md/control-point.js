
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdControlPoint extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m20 33.4c7.3 0 13.4-6.1 13.4-13.4s-6.1-13.4-13.4-13.4-13.4 6.1-13.4 13.4 6.1 13.4 13.4 13.4z m0-30c9.2 0 16.6 7.4 16.6 16.6s-7.4 16.6-16.6 16.6-16.6-7.4-16.6-16.6 7.4-16.6 16.6-16.6z m1.6 8.2v6.8h6.8v3.2h-6.8v6.8h-3.2v-6.8h-6.8v-3.2h6.8v-6.8h3.2z"/></g>
            </IconBase>
        );
    }
}
