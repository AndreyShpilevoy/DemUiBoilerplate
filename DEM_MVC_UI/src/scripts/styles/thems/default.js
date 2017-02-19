const defaultTheme = 	{
    grid: {
        containers: {
            xs: {
                min: 'min-width: 0px',
                max: 'min-width: 575px',
                container: '100%'
            },
            sm: {
                min: 'min-width: 576px',
                max: 'min-width: 767px',
                container: '558px'
            },
            md: {
                min: 'min-width: 768px',
                max: 'min-width: 991px',
                container: '720px'
            },
            lg: {
                min: 'min-width: 992px',
                max: 'min-width: 1199px',
                container: '960px'
            },
            xl: {
                min: 'min-width: 1200px',
                max: 'min-width: 999999999px',
                container: '1140px'
            },
        }
    },
    height: 2,
    color: 'red'
};

export default defaultTheme;