import React from 'react'
import { Segment } from 'semantic-ui-react'
import { BookDetails } from './BookDetails'
import { Comments } from './Comments'



export const ViewBook = ({selectedBook}) => {
    return (
        <div>
            <Segment>
                {selectedBook && <BookDetails  book={selectedBook} />}
            </Segment>
            <Segment>
                <Comments />
            </Segment>
        </div>
    )
}
