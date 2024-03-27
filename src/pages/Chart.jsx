import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
import PropTypes from 'prop-types';
import { useLoaderData } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getLocalData } from '../utility/utility';
import ReadNotFound from '../components/booksList/ReadNotFound';
const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

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
    const [data, setData] = useState([])
    const loadData = useLoaderData();
    useEffect(() => {
        const localData = getLocalData();
        if (loadData.length > 0) {
            const books = loadData.filter(book => localData.includes(book.id))
            setData(books);
        }

    }, [loadData]);
    return (
        <div className='container mx-auto mt-16 relative flex items-center justify-center bg-black bg-opacity-5 py-24 rounded-xl'>
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                {
                    data.length == 0 ? <div>
                        <ReadNotFound />
                    </div> : null
                }
            </div>
            <BarChart
                width={1100}
                height={700}
                data={data}
            >

                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="book_name" />
                <YAxis />
                <Bar dataKey="total_pages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                    {data.map((entry, index) => (
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
