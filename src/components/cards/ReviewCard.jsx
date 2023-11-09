import React from 'react';

const ReviewCard = () => {
    return (
        
            
        <div class="grid w-full grid-cols-1 gap-8 mt-8 2xl:grid-cols-4 lg:mt-16 md:grid-cols-2 lg:grid-cols-3">
            <div class="w-full p-8 bg-white rounded-md shadow-lg dark:bg-gray-800">
                <p class="leading-loose text-gray-500 dark:text-gray-400">
                    “ Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ea tempora dolores qui eius pariatur
                    odit ad voluptas iste, cum accusantium beatae tempore quasi nesciunt distinctio. ”
                </p>

                <div class="flex items-center mt-6 -mx-2">
                    <img class="object-cover mx-2 rounded-full w-14 h-14" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt=""/>

                    <div class="mx-2">
                        <h1 class="font-semibold text-gray-800 dark:text-white">Robbert</h1>
                        <span class="text-sm text-gray-500 dark:text-gray-400">CTO, Robert Consultency</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;