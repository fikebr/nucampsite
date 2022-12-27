export const formatDate = (date) =>
        new Intl.DateTimeFormat('en-US', {
                year: 'numeric',
                month: 'short',
                day: '2-digit',
        }).format(new Date(Date.parse(date)));
