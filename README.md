# cli-color - Yet another colors and formatting for the console solution

Colors, formatting and other goodies for the console. This package won't mess with built-ins and provides neat way to predefine formatting patterns, see below.

## Installation

	$ npm install cli-color

## Usage

Usage:

```javascript
var clc = require('cli-color');
```

Output colored text:

```javascript
console.log(clc.red('Text in red'));
```

Styles can be mixed:

```javascript
console.log(clc.red.bgWhite.underline('Underlined red text on white background.'));
```

Styled text can be mixed with unstyled:

```javascript
console.log(clc.red('red') + ' plain ' + clc.blue('blue'));
```

__Best way is to predefine needed stylings and then use it__:

```javascript
var error = clc.red.bold;
var warn = clc.yellow;
var notice = clc.blue;

console.log(error('Error!'));
console.log(warn('Warning'));
console.log(notice('Notice'));
```

Supported are all ANSI colors and styles:

#### Styles

Styles will display correctly if font used in your console supports them.

* bold
* italic
* underline
* inverse
* strike

#### Colors

<table>
  <thead><th>Foreground</th><th>Background</th><th width="30"></th></thead>
  <tbody>
    <tr><td>black</td><td>bgBlack</td><td bgcolor="black"></td></tr>
    <tr><td>red</td><td>bgRed</td><td bgcolor="#800000"></td></tr>
    <tr><td>green</td><td>bgGreen</td><td bgcolor="#008000"></td></tr>
    <tr><td>yellow</td><td>bgYellow</td><td bgcolor="#808000"></td></tr>
    <tr><td>blue</td><td>bgBlue</td><td bgcolor="#000080"></td></tr>
    <tr><td>magenta</td><td>bgMagenta</td><td bgcolor="#800080"></td></tr>
    <tr><td>cyan</td><td>bgCyan</td><td bgcolor="#008080"></td></tr>
    <tr><td>white</td><td>bgWhite</td><td bgcolor="#c0c0c0"></td></tr>
  </tbody>
</table>

##### Bright variants

<table>
  <thead><th>Foreground</th><th>Background</th><th width="30"></th></thead>
  <tbody>
    <tr><td>blackBright</td><td>bgBlackBright</td><td bgcolor="#808080"></td></tr>
    <tr><td>redBright</td><td>bgRedBright</td><td bgcolor="#f00"></td></tr>
    <tr><td>greenBright</td><td>bgGreenBright</td><td bgcolor="#0f0"></td></tr>
    <tr><td>yellowBright</td><td>bgYellowBright</td><td bgcolor="#ff0"></td></tr>
    <tr><td>blueBright</td><td>bgBlueBright</td><td bgcolor="#00f"></td></tr>
    <tr><td>magentaBright</td><td>bgMagentaBright</td><td bgcolor="#f0f"></td></tr>
    <tr><td>cyanBright</td><td>bgCyanBright</td><td bgcolor="#0ff"></td></tr>
    <tr><td>whiteBright</td><td>bgWhiteBright</td><td bgcolor="white"></td></tr>
  </tbody>
</table>

##### xTerm colors (256 colors table)

__Not supported on Windows and some terminals__. However if used in not supported environment, the closest color from basic (16 colors) palette is chosen.

Usage:

```javascript
var msg = clc.xterm(202).bgXterm(236);
console.log(msg('Orange text on dark gray background'));
```

Color table:

<table>
  <tr>
    <td>0</td><td bgcolor="black" width="10"></td>
    <td>1</td><td bgcolor="#800000" width="10"></td>
    <td>2</td><td bgcolor="#008000" width="10"></td>
    <td>3</td><td bgcolor="#808000" width="10"></td>
    <td>4</td><td bgcolor="#000080" width="10"></td>
    <td>5</td><td bgcolor="#800080" width="10"></td>
    <td>6</td><td bgcolor="#008080" width="10"></td>
    <td>7</td><td bgcolor="#c0c0c0" width="10"></td>
  </tr>
  <tr>
    <td>8</td><td bgcolor="#808080" width="10"></td>
    <td>9</td><td bgcolor="#f00" width="10"></td>
    <td>10</td><td bgcolor="#0f0" width="10"></td>
    <td>11</td><td bgcolor="#ff0" width="10"></td>
    <td>12</td><td bgcolor="#00f" width="10"></td>
    <td>13</td><td bgcolor="#f0f" width="10"></td>
    <td>14</td><td bgcolor="#0ff" width="10"></td>
    <td>15</td><td bgcolor="white" width="10"></td>
  </tr>

  <tr>
    <td>16</td><td bgcolor="black" width="10"></td>
    <td>17</td><td bgcolor="#00005f" width="10"></td>
    <td>18</td><td bgcolor="#000087" width="10"></td>
    <td>19</td><td bgcolor="#0000af" width="10"></td>
    <td>20</td><td bgcolor="#0000df" width="10"></td>
    <td>21</td><td bgcolor="#00f" width="10"></td>
  </tr>
  <tr>
    <td>22</td><td bgcolor="#005f00" width="10"></td>
    <td>23</td><td bgcolor="#005f5f" width="10"></td>
    <td>24</td><td bgcolor="#005f87" width="10"></td>
    <td>25</td><td bgcolor="#005faf" width="10"></td>
    <td>26</td><td bgcolor="#005fdf" width="10"></td>
    <td>27</td><td bgcolor="#005fff" width="10"></td>
  </tr>
  <tr>
    <td>28</td><td bgcolor="#008700" width="10"></td>
    <td>29</td><td bgcolor="#00875f" width="10"></td>
    <td>30</td><td bgcolor="#008787" width="10"></td>
    <td>31</td><td bgcolor="#0087af" width="10"></td>
    <td>32</td><td bgcolor="#0087df" width="10"></td>
    <td>33</td><td bgcolor="#0087ff" width="10"></td>
  </tr>
  <tr>
    <td>34</td><td bgcolor="#00af00" width="10"></td>
    <td>35</td><td bgcolor="#00af5f" width="10"></td>
    <td>36</td><td bgcolor="#00af87" width="10"></td>
    <td>37</td><td bgcolor="#00afaf" width="10"></td>
    <td>38</td><td bgcolor="#00afdf" width="10"></td>
    <td>39</td><td bgcolor="#00afff" width="10"></td>
  </tr>
  <tr>
    <td>40</td><td bgcolor="#00df00" width="10"></td>
    <td>41</td><td bgcolor="#00df5f" width="10"></td>
    <td>42</td><td bgcolor="#00df87" width="10"></td>
    <td>43</td><td bgcolor="#00dfaf" width="10"></td>
    <td>44</td><td bgcolor="#00dfdf" width="10"></td>
    <td>45</td><td bgcolor="#00dfff" width="10"></td>
  </tr>
  <tr>
    <td>46</td><td bgcolor="#00ff00" width="10"></td>
    <td>47</td><td bgcolor="#00ff5f" width="10"></td>
    <td>48</td><td bgcolor="#00ff87" width="10"></td>
    <td>49</td><td bgcolor="#00ffaf" width="10"></td>
    <td>50</td><td bgcolor="#00ffdf" width="10"></td>
    <td>51</td><td bgcolor="#00ffff" width="10"></td>
  </tr>

  <tr>
    <td>52</td><td bgcolor="#5f0000" width="10"></td>
    <td>53</td><td bgcolor="#5f005f" width="10"></td>
    <td>54</td><td bgcolor="#5f0087" width="10"></td>
    <td>55</td><td bgcolor="#5f00af" width="10"></td>
    <td>56</td><td bgcolor="#5f00df" width="10"></td>
    <td>57</td><td bgcolor="#5f00ff" width="10"></td>
  </tr>
  <tr>
    <td>58</td><td bgcolor="#5f5f00" width="10"></td>
    <td>59</td><td bgcolor="#5f5f5f" width="10"></td>
    <td>60</td><td bgcolor="#5f5f87" width="10"></td>
    <td>61</td><td bgcolor="#5f5faf" width="10"></td>
    <td>62</td><td bgcolor="#5f5fdf" width="10"></td>
    <td>63</td><td bgcolor="#5f5fff" width="10"></td>
  </tr>
  <tr>
    <td>64</td><td bgcolor="#5f8700" width="10"></td>
    <td>65</td><td bgcolor="#5f875f" width="10"></td>
    <td>66</td><td bgcolor="#5f8787" width="10"></td>
    <td>67</td><td bgcolor="#5f87af" width="10"></td>
    <td>68</td><td bgcolor="#5f87df" width="10"></td>
    <td>69</td><td bgcolor="#5f87ff" width="10"></td>
  </tr>
  <tr>
    <td>70</td><td bgcolor="#5faf00" width="10"></td>
    <td>71</td><td bgcolor="#5faf5f" width="10"></td>
    <td>72</td><td bgcolor="#5faf87" width="10"></td>
    <td>73</td><td bgcolor="#5fafaf" width="10"></td>
    <td>74</td><td bgcolor="#5fafdf" width="10"></td>
    <td>75</td><td bgcolor="#5fafff" width="10"></td>
  </tr>
  <tr>
    <td>76</td><td bgcolor="#5fdf00" width="10"></td>
    <td>77</td><td bgcolor="#5fdf5f" width="10"></td>
    <td>78</td><td bgcolor="#5fdf87" width="10"></td>
    <td>79</td><td bgcolor="#5fdfaf" width="10"></td>
    <td>80</td><td bgcolor="#5fdfdf" width="10"></td>
    <td>81</td><td bgcolor="#5fdfff" width="10"></td>
  </tr>
  <tr>
    <td>82</td><td bgcolor="#5fff00" width="10"></td>
    <td>83</td><td bgcolor="#5fff5f" width="10"></td>
    <td>84</td><td bgcolor="#5fff87" width="10"></td>
    <td>85</td><td bgcolor="#5fffaf" width="10"></td>
    <td>86</td><td bgcolor="#5fffdf" width="10"></td>
    <td>87</td><td bgcolor="#5fffff" width="10"></td>
  </tr>

  <tr>
    <td>88</td><td bgcolor="#870000" width="10"></td>
    <td>89</td><td bgcolor="#87005f" width="10"></td>
    <td>90</td><td bgcolor="#870087" width="10"></td>
    <td>91</td><td bgcolor="#8700af" width="10"></td>
    <td>92</td><td bgcolor="#8700df" width="10"></td>
    <td>93</td><td bgcolor="#8700ff" width="10"></td>
  </tr>
  <tr>
    <td>94</td><td bgcolor="#875f00" width="10"></td>
    <td>95</td><td bgcolor="#875f5f" width="10"></td>
    <td>96</td><td bgcolor="#875f87" width="10"></td>
    <td>97</td><td bgcolor="#875faf" width="10"></td>
    <td>98</td><td bgcolor="#875fdf" width="10"></td>
    <td>99</td><td bgcolor="#875fff" width="10"></td>
  </tr>
  <tr>
    <td>100</td><td bgcolor="#878700" width="10"></td>
    <td>101</td><td bgcolor="#87875f" width="10"></td>
    <td>102</td><td bgcolor="#878787" width="10"></td>
    <td>103</td><td bgcolor="#8787af" width="10"></td>
    <td>104</td><td bgcolor="#8787df" width="10"></td>
    <td>105</td><td bgcolor="#8787ff" width="10"></td>
  </tr>
  <tr>
    <td>106</td><td bgcolor="#87af00" width="10"></td>
    <td>107</td><td bgcolor="#87af5f" width="10"></td>
    <td>108</td><td bgcolor="#87af87" width="10"></td>
    <td>109</td><td bgcolor="#87afaf" width="10"></td>
    <td>110</td><td bgcolor="#87afdf" width="10"></td>
    <td>111</td><td bgcolor="#87afff" width="10"></td>
  </tr>
  <tr>
    <td>112</td><td bgcolor="#87df00" width="10"></td>
    <td>113</td><td bgcolor="#87df5f" width="10"></td>
    <td>114</td><td bgcolor="#87df87" width="10"></td>
    <td>115</td><td bgcolor="#87dfaf" width="10"></td>
    <td>116</td><td bgcolor="#87dfdf" width="10"></td>
    <td>117</td><td bgcolor="#87dfff" width="10"></td>
  </tr>
  <tr>
    <td>118</td><td bgcolor="#87ff00" width="10"></td>
    <td>119</td><td bgcolor="#87ff5f" width="10"></td>
    <td>120</td><td bgcolor="#87ff87" width="10"></td>
    <td>121</td><td bgcolor="#87ffaf" width="10"></td>
    <td>122</td><td bgcolor="#87ffdf" width="10"></td>
    <td>123</td><td bgcolor="#87ffff" width="10"></td>
  </tr>

  <tr>
    <td>124</td><td bgcolor="#af0000" width="10"></td>
    <td>125</td><td bgcolor="#af005f" width="10"></td>
    <td>126</td><td bgcolor="#af0087" width="10"></td>
    <td>127</td><td bgcolor="#af00af" width="10"></td>
    <td>128</td><td bgcolor="#af00df" width="10"></td>
    <td>129</td><td bgcolor="#af00ff" width="10"></td>
  </tr>
  <tr>
    <td>130</td><td bgcolor="#af5f00" width="10"></td>
    <td>131</td><td bgcolor="#af5f5f" width="10"></td>
    <td>132</td><td bgcolor="#af5f87" width="10"></td>
    <td>133</td><td bgcolor="#af5faf" width="10"></td>
    <td>134</td><td bgcolor="#af5fdf" width="10"></td>
    <td>135</td><td bgcolor="#af5fff" width="10"></td>
  </tr>
  <tr>
    <td>136</td><td bgcolor="#af8700" width="10"></td>
    <td>137</td><td bgcolor="#af875f" width="10"></td>
    <td>138</td><td bgcolor="#af8787" width="10"></td>
    <td>139</td><td bgcolor="#af87af" width="10"></td>
    <td>140</td><td bgcolor="#af87df" width="10"></td>
    <td>141</td><td bgcolor="#af87ff" width="10"></td>
  </tr>
  <tr>
    <td>142</td><td bgcolor="#afaf00" width="10"></td>
    <td>143</td><td bgcolor="#afaf5f" width="10"></td>
    <td>144</td><td bgcolor="#afaf87" width="10"></td>
    <td>145</td><td bgcolor="#afafaf" width="10"></td>
    <td>146</td><td bgcolor="#afafdf" width="10"></td>
    <td>147</td><td bgcolor="#afafff" width="10"></td>
  </tr>
  <tr>
    <td>148</td><td bgcolor="#afdf00" width="10"></td>
    <td>149</td><td bgcolor="#afdf5f" width="10"></td>
    <td>150</td><td bgcolor="#afdf87" width="10"></td>
    <td>151</td><td bgcolor="#afdfaf" width="10"></td>
    <td>152</td><td bgcolor="#afdfdf" width="10"></td>
    <td>153</td><td bgcolor="#afdfff" width="10"></td>
  </tr>
  <tr>
    <td>154</td><td bgcolor="#afff00" width="10"></td>
    <td>155</td><td bgcolor="#afff5f" width="10"></td>
    <td>156</td><td bgcolor="#afff87" width="10"></td>
    <td>157</td><td bgcolor="#afffaf" width="10"></td>
    <td>158</td><td bgcolor="#afffdf" width="10"></td>
    <td>159</td><td bgcolor="#afffff" width="10"></td>
  </tr>

  <tr>
    <td>160</td><td bgcolor="#d70000" width="10"></td>
    <td>161</td><td bgcolor="#d7005f" width="10"></td>
    <td>162</td><td bgcolor="#d70087" width="10"></td>
    <td>163</td><td bgcolor="#d700af" width="10"></td>
    <td>164</td><td bgcolor="#d700df" width="10"></td>
    <td>165</td><td bgcolor="#d700ff" width="10"></td>
  </tr>
  <tr>
    <td>166</td><td bgcolor="#d75f00" width="10"></td>
    <td>167</td><td bgcolor="#d75f5f" width="10"></td>
    <td>168</td><td bgcolor="#d75f87" width="10"></td>
    <td>169</td><td bgcolor="#d75faf" width="10"></td>
    <td>170</td><td bgcolor="#d75fdf" width="10"></td>
    <td>171</td><td bgcolor="#d75fff" width="10"></td>
  </tr>
  <tr>
    <td>172</td><td bgcolor="#d78700" width="10"></td>
    <td>173</td><td bgcolor="#d7875f" width="10"></td>
    <td>174</td><td bgcolor="#d78787" width="10"></td>
    <td>175</td><td bgcolor="#d787af" width="10"></td>
    <td>176</td><td bgcolor="#d787df" width="10"></td>
    <td>177</td><td bgcolor="#d787ff" width="10"></td>
  </tr>
  <tr>
    <td>178</td><td bgcolor="#d7af00" width="10"></td>
    <td>179</td><td bgcolor="#d7af5f" width="10"></td>
    <td>180</td><td bgcolor="#d7af87" width="10"></td>
    <td>181</td><td bgcolor="#d7afaf" width="10"></td>
    <td>182</td><td bgcolor="#d7afdf" width="10"></td>
    <td>183</td><td bgcolor="#d7afff" width="10"></td>
  </tr>
  <tr>
    <td>184</td><td bgcolor="#d7df00" width="10"></td>
    <td>185</td><td bgcolor="#d7df5f" width="10"></td>
    <td>186</td><td bgcolor="#d7df87" width="10"></td>
    <td>187</td><td bgcolor="#d7dfaf" width="10"></td>
    <td>188</td><td bgcolor="#d7dfdf" width="10"></td>
    <td>189</td><td bgcolor="#d7dfff" width="10"></td>
  </tr>
  <tr>
    <td>190</td><td bgcolor="#d7ff00" width="10"></td>
    <td>191</td><td bgcolor="#d7ff5f" width="10"></td>
    <td>192</td><td bgcolor="#d7ff87" width="10"></td>
    <td>193</td><td bgcolor="#d7ffaf" width="10"></td>
    <td>194</td><td bgcolor="#d7ffdf" width="10"></td>
    <td>195</td><td bgcolor="#d7ffff" width="10"></td>
  </tr>

  <tr>
    <td>196</td><td bgcolor="#ff0000" width="10"></td>
    <td>197</td><td bgcolor="#ff005f" width="10"></td>
    <td>198</td><td bgcolor="#ff0087" width="10"></td>
    <td>199</td><td bgcolor="#ff00af" width="10"></td>
    <td>200</td><td bgcolor="#ff00df" width="10"></td>
    <td>201</td><td bgcolor="#ff00ff" width="10"></td>
  </tr>
  <tr>
    <td>202</td><td bgcolor="#ff5f00" width="10"></td>
    <td>203</td><td bgcolor="#ff5f5f" width="10"></td>
    <td>204</td><td bgcolor="#ff5f87" width="10"></td>
    <td>205</td><td bgcolor="#ff5faf" width="10"></td>
    <td>206</td><td bgcolor="#ff5fdf" width="10"></td>
    <td>207</td><td bgcolor="#ff5fff" width="10"></td>
  </tr>
  <tr>
    <td>208</td><td bgcolor="#ff8700" width="10"></td>
    <td>209</td><td bgcolor="#ff875f" width="10"></td>
    <td>210</td><td bgcolor="#ff8787" width="10"></td>
    <td>211</td><td bgcolor="#ff87af" width="10"></td>
    <td>212</td><td bgcolor="#ff87df" width="10"></td>
    <td>213</td><td bgcolor="#ff87ff" width="10"></td>
  </tr>
  <tr>
    <td>214</td><td bgcolor="#ffaf00" width="10"></td>
    <td>215</td><td bgcolor="#ffaf5f" width="10"></td>
    <td>216</td><td bgcolor="#ffaf87" width="10"></td>
    <td>217</td><td bgcolor="#ffafaf" width="10"></td>
    <td>218</td><td bgcolor="#ffafdf" width="10"></td>
    <td>219</td><td bgcolor="#ffafff" width="10"></td>
  </tr>
  <tr>
    <td>220</td><td bgcolor="#ffdf00" width="10"></td>
    <td>221</td><td bgcolor="#ffdf5f" width="10"></td>
    <td>222</td><td bgcolor="#ffdf87" width="10"></td>
    <td>223</td><td bgcolor="#ffdfaf" width="10"></td>
    <td>224</td><td bgcolor="#ffdfdf" width="10"></td>
    <td>225</td><td bgcolor="#ffdfff" width="10"></td>
  </tr>
  <tr>
    <td>226</td><td bgcolor="#ffff00" width="10"></td>
    <td>227</td><td bgcolor="#ffff5f" width="10"></td>
    <td>228</td><td bgcolor="#ffff87" width="10"></td>
    <td>229</td><td bgcolor="#ffffaf" width="10"></td>
    <td>230</td><td bgcolor="#ffffdf" width="10"></td>
    <td>231</td><td bgcolor="#ffffff" width="10"></td>
  </tr>

  <tr>
    <td>232</td><td bgcolor="#080808" width="10"></td>
    <td>233</td><td bgcolor="#121212" width="10"></td>
    <td>234</td><td bgcolor="#1c1c1c" width="10"></td>
    <td>235</td><td bgcolor="#262626" width="10"></td>
    <td>236</td><td bgcolor="#303030" width="10"></td>
    <td>237</td><td bgcolor="#3a3a3a" width="10"></td>
  </tr>
  <tr>
    <td>238</td><td bgcolor="#444444" width="10"></td>
    <td>239</td><td bgcolor="#4e4e4e" width="10"></td>
    <td>240</td><td bgcolor="#585858" width="10"></td>
    <td>241</td><td bgcolor="#626262" width="10"></td>
    <td>242</td><td bgcolor="#6c6c6c" width="10"></td>
    <td>243</td><td bgcolor="#767676" width="10"></td>
  </tr>
  <tr>
    <td>244</td><td bgcolor="#808080" width="10"></td>
    <td>245</td><td bgcolor="#8a8a8a" width="10"></td>
    <td>246</td><td bgcolor="#949494" width="10"></td>
    <td>247</td><td bgcolor="#9e9e9e" width="10"></td>
    <td>248</td><td bgcolor="#a8a8a8" width="10"></td>
    <td>249</td><td bgcolor="#b2b2b2" width="10"></td>
  </tr>
  <tr>
    <td>250</td><td bgcolor="#bcbcbc" width="10"></td>
    <td>251</td><td bgcolor="#c6c6c6" width="10"></td>
    <td>252</td><td bgcolor="#d0d0d0" width="10"></td>
    <td>253</td><td bgcolor="#dadada" width="10"></td>
    <td>254</td><td bgcolor="#e4e4e4" width="10"></td>
    <td>255</td><td bgcolor="#eeeeee" width="10"></td>
  </tr>
</table>

#### Terminal reset

Terminal can be cleared with `clc.reset`

```javascript
console.log(clc.reset);
```

#### Move around functions

##### clc.move(x, y)

Move cursor _x_ columns and _y_ rows away. Values can be positive or negative, e.g.:

```javascript
process.stdout.write(clc.move(-2, -2)); // Move cursors two columns and two rows back
```

##### clc.moveTo(x, y)

Absolute move. Sets cursor position at _x_ column and _y_ row

```javascript
process.stdout.write(clc.moveTo(0, 0)); // Move cursor to first row and first column in terminal window
```

##### clc.bol([n[, erase]])

Move cursor to the begining of the line, with _n_ we may specify how many lines away we want to move, value can be positive or negative. Additionally we may decide to clear lines content with _erase_

```javascript
process.stdout.write(clc.bol(-2)); // Move cursor two lines back and place it at begin of the line
```

##### clc.up(n)

Move cursor up _n_ rows

##### clc.down(n)

Move cursor down _n_ rows

##### clc.right(n)

Move cursor right _n_ columns

##### clc.left(n)

Move cursor left _n_ columns

#### Terminal characteristics

##### clc.width

Returns terminal width

##### clc.height

Returns terminal height

### Additional functionalities (provided as separate modules)

#### trim(formatedText)

Trims ANSI formatted string to plain text

```javascript
var ansiTrim = require('cli-color/lib/trim');

var plain = ansiTrim(formatted);
```

#### throbber(interval[, format])

Displays throbber on given interval.
Interval should be [clock.interval](https://github.com/medikoo/clock) object
Optionally throbber output can be formatted with given format

```javascript
var interval = require('clock/lib/interval')
  , ansiThrobber = require('cli-color/lib/throbber');

var i = interval(200, true);

// Display throbber while interval is ticking
ansiThrobber(i);

// at any time you can stop/start interval
// When interval is stopped throbber doesn't show
i.stop();
```

## Tests [![Build Status](https://secure.travis-ci.org/medikoo/cli-color.png?branch=master)](https://secure.travis-ci.org/medikoo/cli-color)

	$ npm test
