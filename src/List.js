import React from "react";

export const List= ({data}) => {

    return(
        <div className="Animals">
            <table>
                <tead/>
                <tbody>
                    {
                        data.map(p=> (
                            <tr key={p.id}>
                                <td>{p.picture}</td>
                                <td>{p.animal}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}