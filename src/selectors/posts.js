import moment from 'moment';

export default ( posts, {text, startDate, endDate }) => {
    return posts.filter((post) => {
        const textMatch = post.description.toLowerCase().includes(text.toLowerCase()) ||post.title.toLowerCase().includes(text.toLowerCase());
        const createdAtMoment = moment(post.publish_date);
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;

        return startDateMatch && endDateMatch && textMatch;
    });
}