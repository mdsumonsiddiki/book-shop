import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
import PropTypes from 'prop-types';
import { useLoaderData } from 'react-router-dom';
const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

// const data = [
//     {
//         name: 'To Kill a Mockingbird',
//         pages: 281
//     },
//     {
//         name: '1984',
//         pages: 328
//     },
//     {
//         name: 'The Great Gatsby',
//         pages: 180
//     },
//     {
//         name: 'Pride and Prejudice',
//         pages: 279
//     },
//     {
//         name: 'The Catcher in the Rye',
//         pages: 214
//     },
//     {
//         name: 'Harry Potter',
//         pages: 223
//     },
// ];

const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

export default function Chart() {
    const loadData = useLoaderData()
    return (
        <div className='container mx-auto mt-24 flex items-center justify-center'>
            <BarChart
            width={1300}
            height={800}
            data={loadData}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="book_name" />
            <YAxis />
            <Bar dataKey="total_pages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                {loadData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index % 6]} />
                ))}
            </Bar>
        </BarChart>
        </div>
    );
}
TriangleBar.propTypes = {
    fill: PropTypes.string,
    x: PropTypes.number,
    y: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
}
Chart.demoUrl = 'https://codesandbox.io/s/bar-chart-with-customized-shape-dusth';
