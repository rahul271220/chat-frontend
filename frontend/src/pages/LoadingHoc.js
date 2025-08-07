function SpinnerLoader(Component) {
    return function({...props}) {
        if (props.loading == false) {
            return <h1>Loading</h1>
        }
        return <Component {...props}></Component>
    }
}

export default SpinnerLoader;