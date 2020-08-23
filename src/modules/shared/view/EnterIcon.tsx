import React from 'react'
import styled from 'styled-components'

interface IconProps {
    onClick: () => void
}

const Icon: React.FC<IconProps> = (props) => (
    <svg id="Layer_1" enableBackground="new 0 0 512 512" height="80" viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg" {...props}>
        <g>
            <circle cx="361.454" cy="42.134" r="42.134"/>
            <path d="m484.609 197.77-21.093-58.872c-8.663-24.175-31.737-40.417-57.416-40.417h-15.17c-1.529 7.952-7.895 37.421-19.973 47.602l1.426-6.773c.072-.342.074-.695.007-1.037l-2.561-13.018c-.24-1.219-1.309-2.098-2.551-2.098h-9.821c-1.242 0-2.311.879-2.551 2.098l-2.561 13.018c-.067.343-.065.696.007 1.037l1.426 6.773c-12.078-10.182-18.444-39.65-19.973-47.602h-13.806c-25.681 0-48.755 16.243-57.416 40.418l-21.094 58.871c-.857 2.39-1.239 4.923-1.126 7.459l3.068 69.289c.476 10.751 9.576 19.145 20.393 18.663 10.786-.477 19.142-9.608 18.664-20.393l-2.898-65.449 19.797-55.253c.266-.744.584-1.458.924-2.158l8.059 139.888-22.331 194.922c-1.667 14.557 9.719 27.275 24.357 27.275 12.276 0 22.865-9.213 24.296-21.701 23.706-207.47 22.492-195.041 22.495-197.785h10.361c.003 2.748-1.245-9.982 22.496 197.786 1.541 13.452 13.697 23.078 27.113 21.539 13.435-1.539 23.078-13.678 21.539-27.113l-22.32-194.821 9.012-140.79c.507.944.954 1.93 1.323 2.959l19.61 54.731-6.544 66.237c-1.137 11.505 7.896 21.471 19.476 21.471 9.93 0 18.433-7.537 19.429-17.627l6.977-70.613c.286-2.882-.073-5.79-1.05-8.516z"/>
            <path d="m354.484 98.464c-1.982 0-3.478 1.798-3.118 3.747l2.596 14.062c.278 1.504 1.589 2.595 3.118 2.595h10.574c1.529 0 2.84-1.092 3.118-2.595l2.596-14.062c.36-1.949-1.136-3.747-3.118-3.747z"/>
            <ellipse cx="111.771" cy="42.134" rx="42.134" ry="42.134" transform="matrix(.973 -.23 .23 .973 -6.691 26.807)"/>
            <path d="m166.673 289.739c-.041-.353-.092-.702-.147-1.05v-51.329l-45.226-18.745c-59.648 25.624-57.289 25.29-62.458 26.447v43.63c-.055.347-.106.695-.147 1.047l-22.34 194.998c-1.667 14.557 9.719 27.275 24.356 27.275 12.276 0 22.865-9.213 24.296-21.7l22.341-194.999c.107-.937.155-1.866.156-2.787h10.361c.001.921.048 1.85.156 2.787l22.34 194.999c1.541 13.452 13.697 23.079 27.113 21.539 13.435-1.539 23.078-13.678 21.539-27.113z"/>
            <path d="m201.68 131.35c-6.535-19.66-24.845-32.869-45.562-32.869h-14.871c-1.529 7.952-7.895 37.421-19.973 47.603l1.426-6.773c.072-.342.074-.695.007-1.037l-2.561-13.018c-.24-1.219-1.309-2.098-2.551-2.098h-9.821c-1.242 0-2.311.879-2.551 2.098l-2.561 13.018c-.067.343-.065.696.007 1.037l1.264 6.002c1.819.388 3.629.937 5.409 1.675l11.43 4.738 10.395-4.502c11.758-5.094 24.947-2.275 33.628 6.097l2.408 29.824-62.167-25.767c-9.972-4.133-21.408.601-25.542 10.574s.599 21.409 10.573 25.542l91.709 38.011c13.433 5.568 28.148-5.005 26.969-19.631-6.634-82.184-6.006-77.34-7.065-80.524z"/>
            <path d="m104.801 98.464c-1.982 0-3.478 1.798-3.118 3.747l2.596 14.062c.278 1.504 1.589 2.595 3.118 2.595h10.574c1.529 0 2.841-1.091 3.118-2.595l2.596-14.062c.36-1.949-1.136-3.747-3.118-3.747z"/>
            <path d="m59.918 232.944 46.921-20.323-21.079-8.737c-15.712-6.512-23.17-24.528-16.658-40.24 5.655-13.643 19.986-21.058 33.948-18.509-11.4-10.944-17.445-38.935-18.929-46.654h-8.633c-29.964 0-51.75 26.228-48.995 54.6 1.425 14.671 6.201 63.816 6.201 63.816 1.283 13.227 15.1 21.3 27.224 16.047z"/>
            <path d="m135.637 157.545-.404.175 26.477 10.974c-.122-.327-.227-.657-.367-.981-4.291-9.907-15.8-14.462-25.706-10.168z"/>
        </g>
    </svg>
)
 
export const EnterIcon = styled(Icon)`
    position: fixed;
    top: 30px;
    right: 40px;
    fill: white;
    transition: all 0.2s ease;
    :hover {
        cursor: pointer;
        fill: red;
        transform: scale(1.1);
    }
`