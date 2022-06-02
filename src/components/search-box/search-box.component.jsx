import { Component } from 'react'
import "./search-box.styles.css"

class SearchBox extends Component {
    render() {
        const { onSearchChange,className,placeholder } = this.props
        return (
            <div>
                <input
                    type="search"
                    onChange={onSearchChange}
                    className={className}
                    placeholder={placeholder}
                    />
            </div>
        )
    }
}

export default SearchBox