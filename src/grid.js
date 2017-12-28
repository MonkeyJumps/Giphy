import React from 'react';
import { render } from 'react-dom';
import { API_KEY, GIFFY_URL, GIFFY_TRENDING_URL } from './constants'
import Griddle, { plugins, RowDefinition, ColumnDefinition } from 'griddle-react';
import fetch from 'isomorphic-fetch';

class Grid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidMount() {

        console.log("mounted:used for testing.");
    }

    componentWillMount() {
        //show trending to start
        //const url = GIFFY_URL + "search?q=elf&api_key=" + API_KEY + "&limit=50";
        const url = GIFFY_TRENDING_URL + "?api_key=" + API_KEY + "&limit=50";
        let data = [];

        fetch(url) // Call the fetch function passing the url of the API as a parameter
            .then(res => res.json())
            .then(json => {
                console.log(json);
                this.setState({ data: json.data });
            })
            .catch(function (err) {
                console.error(err);
            });
    }
    render() {
        const { data } = this.state;
        const CustomColumn = ({ value }) => <span style={{ color: '#0000AA' }}>{value}</span>;
        const CustomHeading = ({ title }) => <span style={{ color: '#AA0000' }}>{title}</span>;
        const CustomImage = ({ value }) => <span style={{ color: '#0000AA' }}><img src={value} /></span>;
        const NewLayout = ({ Table, Pagination, Filter, SettingsWrapper }) => (
            <div>
                <Pagination />
                <Table />
            </div>
        );
        let pageProperties = {
            currentPage: 1,
            pageSize: 10,
            recordCount: data.length,
        }
        return <Griddle data={data} components={{
            Layout: NewLayout
        }} pageProperties={{ pageProperties }}
            plugins={[plugins.LocalPlugin]}
        >

            <RowDefinition>
                <ColumnDefinition id="title" customComponent={CustomColumn} />
                <ColumnDefinition id="url" customHeadingComponent={CustomHeading} />
                <ColumnDefinition id="images.fixed_height.url" customComponent={CustomImage} />
            </RowDefinition>

        </Griddle>;

    }
}
export default Grid;
