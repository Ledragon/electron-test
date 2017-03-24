import * as d3 from 'd3';

d3.json(`file://${__dirname}/data/data.json`, (error, data: Array<any>) => {
    if (error) {
        console.error(error)
    } else {
        d3.select('.main-container')
            .selectAll('.preview')
            .data(data.sort((a, b) => b.title - a.title).splice(0, 10))
            .enter()
            .append('div')
            .classed('image-preview', true)
            .style('background-image', d => `url('data:image/png;base64,${d.serializedImage}')`)
    }
});
