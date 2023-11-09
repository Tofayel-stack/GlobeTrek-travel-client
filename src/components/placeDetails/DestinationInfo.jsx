import React from 'react';

const DestinationInfo = () => {
    return (
        <div>
            <div>
                <h1 className='text-2xl font-bold mt-12'>About UK </h1>

                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore maiores esse quia laudantium iusto voluptatem consectetur accusantium repudiandae quasi veniam quaerat hic, ratione deleniti excepturi laborum dolore magnam possimus, quae, corrupti nulla praesentium non fugit deserunt pariatur? Similique ut praesentium omnis. Cumque nemo, ex eaque sint temporibus facere odio voluptatibus magnam beatae nesciunt quidem, cupiditate esse debitis possimus modi dolor autem enim assumenda doloribus vero eos fugit iusto nihil culpa. Magnam nisi nobis ducimus, nam sint, dolor laborum ut totam voluptas dolorem animi? Suscipit ea culpa tempore ipsam blanditiis est dolorem quas minus ratione, repellendus sint unde hic, dicta dolores inventore iusto expedita rem non esse assumenda optio obcaecati quaerat! Atque voluptate aspernatur corrupti libero voluptas qui earum eaque delectus ullam reiciendis error, voluptatibus dolor officiis aut sequi maiores eligendi non amet. Accusantium omnis, dolorum aliquid alias repudiandae ipsa culpa ad sit? Aperiam vero asperiores quas minima dignissimos voluptate alias quo commodi harum tenetur reprehenderit, facere beatae. Magnam illum vitae expedita labore sequi dolore autem quaerat nostrum fugiat molestiae aut asperiores quia ipsa, provident soluta aliquid nulla architecto eos obcaecati voluptas tempore hic optio, sit quibusdam. Aspernatur architecto, atque animi sapiente expedita excepturi obcaecati ullam voluptates vero laborum cupiditate quod odit vel illo autem voluptatem! Aliquid soluta assumenda pariatur necessitatibus cumque tenetur dicta ducimus illo neque! Natus unde molestias voluptas. Alias illo soluta sapiente ea, error inventore. Illum provident repellat beatae sit nam odit possimus ad, et pariatur facilis debitis dignissimos illo, commodi eius architecto minus! Totam accusamus a eos.
                </p>

                {/* list of info about this  */}

                <div className="max-w-md mt-8 bg-white shadow-md rounded-md p-6">
                <h2 className="text-2xl font-bold mb-4">Destination info</h2>
                <ul>
                    <li className="flex items-center justify-between py-2 border-b">
                    <span className="font-semibold">Country:</span>
                    <span>United States</span>
                    </li>
                    <li className="flex items-center justify-between py-2 border-b">
                    <span className="font-semibold">Language:</span>
                    <span>English</span>
                    </li>
                    <li className="flex items-center justify-between py-2 border-b">
                    <span className="font-semibold">Area:</span>
                    <span>9.8 million km²</span>
                    </li>
                    <li className="flex items-center justify-between py-2 border-b">
                    <span className="font-semibold">Currency:</span>
                    <span>US Dollar (USD)</span>
                    </li>
                    <li className="flex items-center justify-between py-2 border-b">
                    <span className="font-semibold">Time Zone:</span>
                    <span>UTC -5 to UTC -10</span>
                    </li>
                    <li className="flex items-center justify-between py-2">
                    <span className="font-semibold">Best Time to Travel:</span>
                    <span>Spring or Fall</span>
                    </li>
                </ul>
                </div>
            </div>
        </div>
    );
};

export default DestinationInfo;