import * as d3 from 'd3';

d3.json(`file://${__dirname}/data/data.json`, (error, data: Array<any>) => {
    if (error) {
        console.error(error)
    } else {
        d3.select('#previews')
            .selectAll('.preview')
            .data(data.sort((a, b) => b.rating - a.rating).splice(0, 12))
            .enter()
            .append('div')
            .classed('preview', true)
            .classed('flex-25', true)
            .append('div')
            .classed('image-preview', true)
            .style('background-image', d => `url('data:image/png;base64,${d.serializedImage}')`)
    }
});
