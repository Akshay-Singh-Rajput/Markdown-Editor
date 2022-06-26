import React, { useState } from "react";


export const MarkdownEditor = () => {
    // const [ getInitialState, setInitialState ] = ({text : ""})
    const [ text, setText ] = useState('')

        return (
            <main>
                <section>
                    <label>Markdown</label>
                    <hr />
                    <textarea onChange={(e)=> setText(e.target.value) }>
                    </textarea>
                </section>
                <section>
                    <label>Preview</label>
                    <hr />
                    <div dangerouslySetInnerHTML={ {
                        __html: text
                    } }></div>
                </section>
            </main>
        );
    }

    // getInitialState() {
    //     return { text: '' };
    // },
    // onEdit(text) {
    //     this.setState({ text });
    // },
   
