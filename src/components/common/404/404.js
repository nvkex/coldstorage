import React, { Component } from 'react'

class PageNotFound extends Component {
    render() {
        return (
            <div className="container text-center my-4">
                <p className="text-muted">
                    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" fill="currentColor" className="bi bi-cone-striped" viewBox="0 0 16 16">
                        <path d="M9.97 4.88l.953 3.811C10.158 8.878 9.14 9 8 9c-1.14 0-2.159-.122-2.923-.309L6.03 4.88C6.635 4.957 7.3 5 8 5s1.365-.043 1.97-.12zm-.245-.978L8.97.88C8.718-.13 7.282-.13 7.03.88L6.274 3.9C6.8 3.965 7.382 4 8 4c.618 0 1.2-.036 1.725-.098zm4.396 8.613a.5.5 0 0 1 .037.96l-6 2a.5.5 0 0 1-.316 0l-6-2a.5.5 0 0 1 .037-.96l2.391-.598.565-2.257c.862.212 1.964.339 3.165.339s2.303-.127 3.165-.339l.565 2.257 2.391.598z" />
                    </svg>
                </p>
                <h1 className="display-3 text-muted">Oops!</h1>
                <h3 className="text-muted">The page you were looking for does not exist.</h3>
                <a href="/">Go to Home</a>
            </div>
        )
    }
}

export default PageNotFound;
