import React from "react";

export const AvaBtn = ({ srcImg, className }) => {
    // const ava = 'https://scontent.fsgn8-2.fna.fbcdn.net/v/t39.30808-6/314337830_2212128372320281_3796251610106824436_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=cXsyV9bBltMAX8qj-kI&_nc_ht=scontent.fsgn8-2.fna&oh=00_AfAbLoqVCqSHN1An5BJ02qs0nD-h70PCP1YITaK5HPtlUg&oe=637B1FF3';
    return (
        <div>

            <img className={className} src={srcImg} alt={srcImg} />
            {/* <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" /> */}

        </div>
    );
}