import * as React from "react"
import Svg, { Path, Circle, Line } from "react-native-svg"

const SearchIcon = (props) => (
  <Svg height="100%" width="100%" style={{transform: [{scale: 0.9}]}} preserveAspectRatio="xMinYMin slice">
    <Circle cx="20" cy="25" r="6" stroke='rgba(0, 0, 0, 0.6)' strokeWidth="2"/>
    <Line x1="34" y1="37" x2="24" y2="29" stroke='rgba(0, 0, 0, 0.6)' strokeWidth="2"/>
</Svg>
)

export default SearchIcon 