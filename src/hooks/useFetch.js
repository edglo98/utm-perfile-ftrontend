import { useState, useEffect } from "react"


export const useFetch = ( url ) => {
    const [state, setState] = useState( { data: null, loading: true, error: null } )

    useEffect(() => {
        
        fetch(url)
            .then( resp => resp.json() )
            .then( data => {

                setTimeout(() => {
                    setState({
                        data,
                        error: null,
                        loading: false
                    })
                    
                }, 1000);

            }).catch(
                error => setState({
                    data: [],
                    error,
                    loading: false
                })
            )

    }, [url])
    
    return state
}