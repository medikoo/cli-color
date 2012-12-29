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
    <tr><td>black</td><td>bgBlack</td><td><img src="http://medyk.org/colors/000000.png" /></td></tr>
    <tr><td>red</td><td>bgRed</td><td><img src="http://medyk.org/colors/800000.png" /></td></tr>
    <tr><td>green</td><td>bgGreen</td><td><img src="http://medyk.org/colors/008000.png" /></td></tr>
    <tr><td>yellow</td><td>bgYellow</td><td><img src="http://medyk.org/colors/808000.png" /></td></tr>
    <tr><td>blue</td><td>bgBlue</td><td><img src="http://medyk.org/colors/000080.png" /></td></tr>
    <tr><td>magenta</td><td>bgMagenta</td><td><img src="http://medyk.org/colors/800080.png" /></td></tr>
    <tr><td>cyan</td><td>bgCyan</td><td><img src="http://medyk.org/colors/008080.png" /></td></tr>
    <tr><td>white</td><td>bgWhite</td><td><img src="http://medyk.org/colors/c0c0c0.png" /></td></tr>
  </tbody>
</table>

##### Bright variants

<table>
  <thead><th>Foreground</th><th>Background</th><th width="30"></th></thead>
  <tbody>
    <tr><td>blackBright</td><td>bgBlackBright</td><td><img src="http://medyk.org/colors/808080.png" /></td></tr>
    <tr><td>redBright</td><td>bgRedBright</td><td><img src="http://medyk.org/colors/ff0000.png" /></td></tr>
    <tr><td>greenBright</td><td>bgGreenBright</td><td><img src="http://medyk.org/colors/00ff00.png" /></td></tr>
    <tr><td>yellowBright</td><td>bgYellowBright</td><td><img src="http://medyk.org/colors/ffff00.png" /></td></tr>
    <tr><td>blueBright</td><td>bgBlueBright</td><td><img src="http://medyk.org/colors/0000ff.png" /></td></tr>
    <tr><td>magentaBright</td><td>bgMagentaBright</td><td><img src="http://medyk.org/colors/ff00ff.png" /></td></tr>
    <tr><td>cyanBright</td><td>bgCyanBright</td><td><img src="http://medyk.org/colors/00ffff.png" /></td></tr>
    <tr><td>whiteBright</td><td>bgWhiteBright</td><td><img src="http://medyk.org/colors/ffffff.png" /></td></tr>
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
    <td>0</td><td width="10"><img src="http://medyk.org/colors/000000.png" /></td>
    <td>1</td><td width="10"><img src="http://medyk.org/colors/800000.png" /></td>
    <td>2</td><td width="10"><img src="http://medyk.org/colors/008000.png" /></td>
    <td>3</td><td width="10"><img src="http://medyk.org/colors/808000.png" /></td>
    <td>4</td><td width="10"><img src="http://medyk.org/colors/000080.png" /></td>
    <td>5</td><td width="10"><img src="http://medyk.org/colors/800080.png" /></td>
    <td>6</td><td width="10"><img src="http://medyk.org/colors/008080.png" /></td>
    <td>7</td><td width="10"><img src="http://medyk.org/colors/c0c0c0.png" /></td>
  </tr>
  <tr>
    <td>8</td><td width="10"><img src="http://medyk.org/colors/808080.png" /></td>
    <td>9</td><td width="10"><img src="http://medyk.org/colors/ff0000.png" /></td>
    <td>10</td><td width="10"><img src="http://medyk.org/colors/00ff00.png" /></td>
    <td>11</td><td width="10"><img src="http://medyk.org/colors/ffff00.png" /></td>
    <td>12</td><td width="10"><img src="http://medyk.org/colors/0000ff.png" /></td>
    <td>13</td><td width="10"><img src="http://medyk.org/colors/ff00ff.png" /></td>
    <td>14</td><td width="10"><img src="http://medyk.org/colors/00ffff.png" /></td>
    <td>15</td><td width="10"><img src="http://medyk.org/colors/ffffff.png" /></td>
  </tr>

  <tr>
    <td>16</td><td width="10"><img src="http://medyk.org/colors/000000.png" /></td>
    <td>17</td><td width="10"><img src="http://medyk.org/colors/00005f.png" /></td>
    <td>18</td><td width="10"><img src="http://medyk.org/colors/000087.png" /></td>
    <td>19</td><td width="10"><img src="http://medyk.org/colors/0000af.png" /></td>
    <td>20</td><td width="10"><img src="http://medyk.org/colors/0000df.png" /></td>
    <td>21</td><td width="10"><img src="http://medyk.org/colors/0000ff.png" /></td>
  </tr>
  <tr>
    <td>22</td><td width="10"><img src="http://medyk.org/colors/005f00.png" /></td>
    <td>23</td><td width="10"><img src="http://medyk.org/colors/005f5f.png" /></td>
    <td>24</td><td width="10"><img src="http://medyk.org/colors/005f87.png" /></td>
    <td>25</td><td width="10"><img src="http://medyk.org/colors/005faf.png" /></td>
    <td>26</td><td width="10"><img src="http://medyk.org/colors/005fdf.png" /></td>
    <td>27</td><td width="10"><img src="http://medyk.org/colors/005fff.png" /></td>
  </tr>
  <tr>
    <td>28</td><td width="10"><img src="http://medyk.org/colors/008700.png" /></td>
    <td>29</td><td width="10"><img src="http://medyk.org/colors/00875f.png" /></td>
    <td>30</td><td width="10"><img src="http://medyk.org/colors/008787.png" /></td>
    <td>31</td><td width="10"><img src="http://medyk.org/colors/0087af.png" /></td>
    <td>32</td><td width="10"><img src="http://medyk.org/colors/0087df.png" /></td>
    <td>33</td><td width="10"><img src="http://medyk.org/colors/0087ff.png" /></td>
  </tr>
  <tr>
    <td>34</td><td width="10"><img src="http://medyk.org/colors/00af00.png" /></td>
    <td>35</td><td width="10"><img src="http://medyk.org/colors/00af5f.png" /></td>
    <td>36</td><td width="10"><img src="http://medyk.org/colors/00af87.png" /></td>
    <td>37</td><td width="10"><img src="http://medyk.org/colors/00afaf.png" /></td>
    <td>38</td><td width="10"><img src="http://medyk.org/colors/00afdf.png" /></td>
    <td>39</td><td width="10"><img src="http://medyk.org/colors/00afff.png" /></td>
  </tr>
  <tr>
    <td>40</td><td width="10"><img src="http://medyk.org/colors/00df00.png" /></td>
    <td>41</td><td width="10"><img src="http://medyk.org/colors/00df5f.png" /></td>
    <td>42</td><td width="10"><img src="http://medyk.org/colors/00df87.png" /></td>
    <td>43</td><td width="10"><img src="http://medyk.org/colors/00dfaf.png" /></td>
    <td>44</td><td width="10"><img src="http://medyk.org/colors/00dfdf.png" /></td>
    <td>45</td><td width="10"><img src="http://medyk.org/colors/00dfff.png" /></td>
  </tr>
  <tr>
    <td>46</td><td width="10"><img src="http://medyk.org/colors/00ff00.png" /></td>
    <td>47</td><td width="10"><img src="http://medyk.org/colors/00ff5f.png" /></td>
    <td>48</td><td width="10"><img src="http://medyk.org/colors/00ff87.png" /></td>
    <td>49</td><td width="10"><img src="http://medyk.org/colors/00ffaf.png" /></td>
    <td>50</td><td width="10"><img src="http://medyk.org/colors/00ffdf.png" /></td>
    <td>51</td><td width="10"><img src="http://medyk.org/colors/00ffff.png" /></td>
  </tr>

  <tr>
    <td>52</td><td width="10"><img src="http://medyk.org/colors/5f0000.png" /></td>
    <td>53</td><td width="10"><img src="http://medyk.org/colors/5f005f.png" /></td>
    <td>54</td><td width="10"><img src="http://medyk.org/colors/5f0087.png" /></td>
    <td>55</td><td width="10"><img src="http://medyk.org/colors/5f00af.png" /></td>
    <td>56</td><td width="10"><img src="http://medyk.org/colors/5f00df.png" /></td>
    <td>57</td><td width="10"><img src="http://medyk.org/colors/5f00ff.png" /></td>
  </tr>
  <tr>
    <td>58</td><td width="10"><img src="http://medyk.org/colors/5f5f00.png" /></td>
    <td>59</td><td width="10"><img src="http://medyk.org/colors/5f5f5f.png" /></td>
    <td>60</td><td width="10"><img src="http://medyk.org/colors/5f5f87.png" /></td>
    <td>61</td><td width="10"><img src="http://medyk.org/colors/5f5faf.png" /></td>
    <td>62</td><td width="10"><img src="http://medyk.org/colors/5f5fdf.png" /></td>
    <td>63</td><td width="10"><img src="http://medyk.org/colors/5f5fff.png" /></td>
  </tr>
  <tr>
    <td>64</td><td width="10"><img src="http://medyk.org/colors/5f8700.png" /></td>
    <td>65</td><td width="10"><img src="http://medyk.org/colors/5f875f.png" /></td>
    <td>66</td><td width="10"><img src="http://medyk.org/colors/5f8787.png" /></td>
    <td>67</td><td width="10"><img src="http://medyk.org/colors/5f87af.png" /></td>
    <td>68</td><td width="10"><img src="http://medyk.org/colors/5f87df.png" /></td>
    <td>69</td><td width="10"><img src="http://medyk.org/colors/5f87ff.png" /></td>
  </tr>
  <tr>
    <td>70</td><td width="10"><img src="http://medyk.org/colors/5faf00.png" /></td>
    <td>71</td><td width="10"><img src="http://medyk.org/colors/5faf5f.png" /></td>
    <td>72</td><td width="10"><img src="http://medyk.org/colors/5faf87.png" /></td>
    <td>73</td><td width="10"><img src="http://medyk.org/colors/5fafaf.png" /></td>
    <td>74</td><td width="10"><img src="http://medyk.org/colors/5fafdf.png" /></td>
    <td>75</td><td width="10"><img src="http://medyk.org/colors/5fafff.png" /></td>
  </tr>
  <tr>
    <td>76</td><td width="10"><img src="http://medyk.org/colors/5fdf00.png" /></td>
    <td>77</td><td width="10"><img src="http://medyk.org/colors/5fdf5f.png" /></td>
    <td>78</td><td width="10"><img src="http://medyk.org/colors/5fdf87.png" /></td>
    <td>79</td><td width="10"><img src="http://medyk.org/colors/5fdfaf.png" /></td>
    <td>80</td><td width="10"><img src="http://medyk.org/colors/5fdfdf.png" /></td>
    <td>81</td><td width="10"><img src="http://medyk.org/colors/5fdfff.png" /></td>
  </tr>
  <tr>
    <td>82</td><td width="10"><img src="http://medyk.org/colors/5fff00.png" /></td>
    <td>83</td><td width="10"><img src="http://medyk.org/colors/5fff5f.png" /></td>
    <td>84</td><td width="10"><img src="http://medyk.org/colors/5fff87.png" /></td>
    <td>85</td><td width="10"><img src="http://medyk.org/colors/5fffaf.png" /></td>
    <td>86</td><td width="10"><img src="http://medyk.org/colors/5fffdf.png" /></td>
    <td>87</td><td width="10"><img src="http://medyk.org/colors/5fffff.png" /></td>
  </tr>

  <tr>
    <td>88</td><td width="10"><img src="http://medyk.org/colors/870000.png" /></td>
    <td>89</td><td width="10"><img src="http://medyk.org/colors/87005f.png" /></td>
    <td>90</td><td width="10"><img src="http://medyk.org/colors/870087.png" /></td>
    <td>91</td><td width="10"><img src="http://medyk.org/colors/8700af.png" /></td>
    <td>92</td><td width="10"><img src="http://medyk.org/colors/8700df.png" /></td>
    <td>93</td><td width="10"><img src="http://medyk.org/colors/8700ff.png" /></td>
  </tr>
  <tr>
    <td>94</td><td width="10"><img src="http://medyk.org/colors/875f00.png" /></td>
    <td>95</td><td width="10"><img src="http://medyk.org/colors/875f5f.png" /></td>
    <td>96</td><td width="10"><img src="http://medyk.org/colors/875f87.png" /></td>
    <td>97</td><td width="10"><img src="http://medyk.org/colors/875faf.png" /></td>
    <td>98</td><td width="10"><img src="http://medyk.org/colors/875fdf.png" /></td>
    <td>99</td><td width="10"><img src="http://medyk.org/colors/875fff.png" /></td>
  </tr>
  <tr>
    <td>100</td><td width="10"><img src="http://medyk.org/colors/878700.png" /></td>
    <td>101</td><td width="10"><img src="http://medyk.org/colors/87875f.png" /></td>
    <td>102</td><td width="10"><img src="http://medyk.org/colors/878787.png" /></td>
    <td>103</td><td width="10"><img src="http://medyk.org/colors/8787af.png" /></td>
    <td>104</td><td width="10"><img src="http://medyk.org/colors/8787df.png" /></td>
    <td>105</td><td width="10"><img src="http://medyk.org/colors/8787ff.png" /></td>
  </tr>
  <tr>
    <td>106</td><td width="10"><img src="http://medyk.org/colors/87af00.png" /></td>
    <td>107</td><td width="10"><img src="http://medyk.org/colors/87af5f.png" /></td>
    <td>108</td><td width="10"><img src="http://medyk.org/colors/87af87.png" /></td>
    <td>109</td><td width="10"><img src="http://medyk.org/colors/87afaf.png" /></td>
    <td>110</td><td width="10"><img src="http://medyk.org/colors/87afdf.png" /></td>
    <td>111</td><td width="10"><img src="http://medyk.org/colors/87afff.png" /></td>
  </tr>
  <tr>
    <td>112</td><td width="10"><img src="http://medyk.org/colors/87df00.png" /></td>
    <td>113</td><td width="10"><img src="http://medyk.org/colors/87df5f.png" /></td>
    <td>114</td><td width="10"><img src="http://medyk.org/colors/87df87.png" /></td>
    <td>115</td><td width="10"><img src="http://medyk.org/colors/87dfaf.png" /></td>
    <td>116</td><td width="10"><img src="http://medyk.org/colors/87dfdf.png" /></td>
    <td>117</td><td width="10"><img src="http://medyk.org/colors/87dfff.png" /></td>
  </tr>
  <tr>
    <td>118</td><td width="10"><img src="http://medyk.org/colors/87ff00.png" /></td>
    <td>119</td><td width="10"><img src="http://medyk.org/colors/87ff5f.png" /></td>
    <td>120</td><td width="10"><img src="http://medyk.org/colors/87ff87.png" /></td>
    <td>121</td><td width="10"><img src="http://medyk.org/colors/87ffaf.png" /></td>
    <td>122</td><td width="10"><img src="http://medyk.org/colors/87ffdf.png" /></td>
    <td>123</td><td width="10"><img src="http://medyk.org/colors/87ffff.png" /></td>
  </tr>

  <tr>
    <td>124</td><td width="10"><img src="http://medyk.org/colors/af0000.png" /></td>
    <td>125</td><td width="10"><img src="http://medyk.org/colors/af005f.png" /></td>
    <td>126</td><td width="10"><img src="http://medyk.org/colors/af0087.png" /></td>
    <td>127</td><td width="10"><img src="http://medyk.org/colors/af00af.png" /></td>
    <td>128</td><td width="10"><img src="http://medyk.org/colors/af00df.png" /></td>
    <td>129</td><td width="10"><img src="http://medyk.org/colors/af00ff.png" /></td>
  </tr>
  <tr>
    <td>130</td><td width="10"><img src="http://medyk.org/colors/af5f00.png" /></td>
    <td>131</td><td width="10"><img src="http://medyk.org/colors/af5f5f.png" /></td>
    <td>132</td><td width="10"><img src="http://medyk.org/colors/af5f87.png" /></td>
    <td>133</td><td width="10"><img src="http://medyk.org/colors/af5faf.png" /></td>
    <td>134</td><td width="10"><img src="http://medyk.org/colors/af5fdf.png" /></td>
    <td>135</td><td width="10"><img src="http://medyk.org/colors/af5fff.png" /></td>
  </tr>
  <tr>
    <td>136</td><td width="10"><img src="http://medyk.org/colors/af8700.png" /></td>
    <td>137</td><td width="10"><img src="http://medyk.org/colors/af875f.png" /></td>
    <td>138</td><td width="10"><img src="http://medyk.org/colors/af8787.png" /></td>
    <td>139</td><td width="10"><img src="http://medyk.org/colors/af87af.png" /></td>
    <td>140</td><td width="10"><img src="http://medyk.org/colors/af87df.png" /></td>
    <td>141</td><td width="10"><img src="http://medyk.org/colors/af87ff.png" /></td>
  </tr>
  <tr>
    <td>142</td><td width="10"><img src="http://medyk.org/colors/afaf00.png" /></td>
    <td>143</td><td width="10"><img src="http://medyk.org/colors/afaf5f.png" /></td>
    <td>144</td><td width="10"><img src="http://medyk.org/colors/afaf87.png" /></td>
    <td>145</td><td width="10"><img src="http://medyk.org/colors/afafaf.png" /></td>
    <td>146</td><td width="10"><img src="http://medyk.org/colors/afafdf.png" /></td>
    <td>147</td><td width="10"><img src="http://medyk.org/colors/afafff.png" /></td>
  </tr>
  <tr>
    <td>148</td><td width="10"><img src="http://medyk.org/colors/afdf00.png" /></td>
    <td>149</td><td width="10"><img src="http://medyk.org/colors/afdf5f.png" /></td>
    <td>150</td><td width="10"><img src="http://medyk.org/colors/afdf87.png" /></td>
    <td>151</td><td width="10"><img src="http://medyk.org/colors/afdfaf.png" /></td>
    <td>152</td><td width="10"><img src="http://medyk.org/colors/afdfdf.png" /></td>
    <td>153</td><td width="10"><img src="http://medyk.org/colors/afdfff.png" /></td>
  </tr>
  <tr>
    <td>154</td><td width="10"><img src="http://medyk.org/colors/afff00.png" /></td>
    <td>155</td><td width="10"><img src="http://medyk.org/colors/afff5f.png" /></td>
    <td>156</td><td width="10"><img src="http://medyk.org/colors/afff87.png" /></td>
    <td>157</td><td width="10"><img src="http://medyk.org/colors/afffaf.png" /></td>
    <td>158</td><td width="10"><img src="http://medyk.org/colors/afffdf.png" /></td>
    <td>159</td><td width="10"><img src="http://medyk.org/colors/afffff.png" /></td>
  </tr>

  <tr>
    <td>160</td><td width="10"><img src="http://medyk.org/colors/d70000.png" /></td>
    <td>161</td><td width="10"><img src="http://medyk.org/colors/d7005f.png" /></td>
    <td>162</td><td width="10"><img src="http://medyk.org/colors/d70087.png" /></td>
    <td>163</td><td width="10"><img src="http://medyk.org/colors/d700af.png" /></td>
    <td>164</td><td width="10"><img src="http://medyk.org/colors/d700df.png" /></td>
    <td>165</td><td width="10"><img src="http://medyk.org/colors/d700ff.png" /></td>
  </tr>
  <tr>
    <td>166</td><td width="10"><img src="http://medyk.org/colors/d75f00.png" /></td>
    <td>167</td><td width="10"><img src="http://medyk.org/colors/d75f5f.png" /></td>
    <td>168</td><td width="10"><img src="http://medyk.org/colors/d75f87.png" /></td>
    <td>169</td><td width="10"><img src="http://medyk.org/colors/d75faf.png" /></td>
    <td>170</td><td width="10"><img src="http://medyk.org/colors/d75fdf.png" /></td>
    <td>171</td><td width="10"><img src="http://medyk.org/colors/d75fff.png" /></td>
  </tr>
  <tr>
    <td>172</td><td width="10"><img src="http://medyk.org/colors/d78700.png" /></td>
    <td>173</td><td width="10"><img src="http://medyk.org/colors/d7875f.png" /></td>
    <td>174</td><td width="10"><img src="http://medyk.org/colors/d78787.png" /></td>
    <td>175</td><td width="10"><img src="http://medyk.org/colors/d787af.png" /></td>
    <td>176</td><td width="10"><img src="http://medyk.org/colors/d787df.png" /></td>
    <td>177</td><td width="10"><img src="http://medyk.org/colors/d787ff.png" /></td>
  </tr>
  <tr>
    <td>178</td><td width="10"><img src="http://medyk.org/colors/d7af00.png" /></td>
    <td>179</td><td width="10"><img src="http://medyk.org/colors/d7af5f.png" /></td>
    <td>180</td><td width="10"><img src="http://medyk.org/colors/d7af87.png" /></td>
    <td>181</td><td width="10"><img src="http://medyk.org/colors/d7afaf.png" /></td>
    <td>182</td><td width="10"><img src="http://medyk.org/colors/d7afdf.png" /></td>
    <td>183</td><td width="10"><img src="http://medyk.org/colors/d7afff.png" /></td>
  </tr>
  <tr>
    <td>184</td><td width="10"><img src="http://medyk.org/colors/d7df00.png" /></td>
    <td>185</td><td width="10"><img src="http://medyk.org/colors/d7df5f.png" /></td>
    <td>186</td><td width="10"><img src="http://medyk.org/colors/d7df87.png" /></td>
    <td>187</td><td width="10"><img src="http://medyk.org/colors/d7dfaf.png" /></td>
    <td>188</td><td width="10"><img src="http://medyk.org/colors/d7dfdf.png" /></td>
    <td>189</td><td width="10"><img src="http://medyk.org/colors/d7dfff.png" /></td>
  </tr>
  <tr>
    <td>190</td><td width="10"><img src="http://medyk.org/colors/d7ff00.png" /></td>
    <td>191</td><td width="10"><img src="http://medyk.org/colors/d7ff5f.png" /></td>
    <td>192</td><td width="10"><img src="http://medyk.org/colors/d7ff87.png" /></td>
    <td>193</td><td width="10"><img src="http://medyk.org/colors/d7ffaf.png" /></td>
    <td>194</td><td width="10"><img src="http://medyk.org/colors/d7ffdf.png" /></td>
    <td>195</td><td width="10"><img src="http://medyk.org/colors/d7ffff.png" /></td>
  </tr>

  <tr>
    <td>196</td><td width="10"><img src="http://medyk.org/colors/ff0000.png" /></td>
    <td>197</td><td width="10"><img src="http://medyk.org/colors/ff005f.png" /></td>
    <td>198</td><td width="10"><img src="http://medyk.org/colors/ff0087.png" /></td>
    <td>199</td><td width="10"><img src="http://medyk.org/colors/ff00af.png" /></td>
    <td>200</td><td width="10"><img src="http://medyk.org/colors/ff00df.png" /></td>
    <td>201</td><td width="10"><img src="http://medyk.org/colors/ff00ff.png" /></td>
  </tr>
  <tr>
    <td>202</td><td width="10"><img src="http://medyk.org/colors/ff5f00.png" /></td>
    <td>203</td><td width="10"><img src="http://medyk.org/colors/ff5f5f.png" /></td>
    <td>204</td><td width="10"><img src="http://medyk.org/colors/ff5f87.png" /></td>
    <td>205</td><td width="10"><img src="http://medyk.org/colors/ff5faf.png" /></td>
    <td>206</td><td width="10"><img src="http://medyk.org/colors/ff5fdf.png" /></td>
    <td>207</td><td width="10"><img src="http://medyk.org/colors/ff5fff.png" /></td>
  </tr>
  <tr>
    <td>208</td><td width="10"><img src="http://medyk.org/colors/ff8700.png" /></td>
    <td>209</td><td width="10"><img src="http://medyk.org/colors/ff875f.png" /></td>
    <td>210</td><td width="10"><img src="http://medyk.org/colors/ff8787.png" /></td>
    <td>211</td><td width="10"><img src="http://medyk.org/colors/ff87af.png" /></td>
    <td>212</td><td width="10"><img src="http://medyk.org/colors/ff87df.png" /></td>
    <td>213</td><td width="10"><img src="http://medyk.org/colors/ff87ff.png" /></td>
  </tr>
  <tr>
    <td>214</td><td width="10"><img src="http://medyk.org/colors/ffaf00.png" /></td>
    <td>215</td><td width="10"><img src="http://medyk.org/colors/ffaf5f.png" /></td>
    <td>216</td><td width="10"><img src="http://medyk.org/colors/ffaf87.png" /></td>
    <td>217</td><td width="10"><img src="http://medyk.org/colors/ffafaf.png" /></td>
    <td>218</td><td width="10"><img src="http://medyk.org/colors/ffafdf.png" /></td>
    <td>219</td><td width="10"><img src="http://medyk.org/colors/ffafff.png" /></td>
  </tr>
  <tr>
    <td>220</td><td width="10"><img src="http://medyk.org/colors/ffdf00.png" /></td>
    <td>221</td><td width="10"><img src="http://medyk.org/colors/ffdf5f.png" /></td>
    <td>222</td><td width="10"><img src="http://medyk.org/colors/ffdf87.png" /></td>
    <td>223</td><td width="10"><img src="http://medyk.org/colors/ffdfaf.png" /></td>
    <td>224</td><td width="10"><img src="http://medyk.org/colors/ffdfdf.png" /></td>
    <td>225</td><td width="10"><img src="http://medyk.org/colors/ffdfff.png" /></td>
  </tr>
  <tr>
    <td>226</td><td width="10"><img src="http://medyk.org/colors/ffff00.png" /></td>
    <td>227</td><td width="10"><img src="http://medyk.org/colors/ffff5f.png" /></td>
    <td>228</td><td width="10"><img src="http://medyk.org/colors/ffff87.png" /></td>
    <td>229</td><td width="10"><img src="http://medyk.org/colors/ffffaf.png" /></td>
    <td>230</td><td width="10"><img src="http://medyk.org/colors/ffffdf.png" /></td>
    <td>231</td><td width="10"><img src="http://medyk.org/colors/ffffff.png" /></td>
  </tr>

  <tr>
    <td>232</td><td width="10"><img src="http://medyk.org/colors/080808.png" /></td>
    <td>233</td><td width="10"><img src="http://medyk.org/colors/121212.png" /></td>
    <td>234</td><td width="10"><img src="http://medyk.org/colors/1c1c1c.png" /></td>
    <td>235</td><td width="10"><img src="http://medyk.org/colors/262626.png" /></td>
    <td>236</td><td width="10"><img src="http://medyk.org/colors/303030.png" /></td>
    <td>237</td><td width="10"><img src="http://medyk.org/colors/3a3a3a.png" /></td>
  </tr>
  <tr>
    <td>238</td><td width="10"><img src="http://medyk.org/colors/444444.png" /></td>
    <td>239</td><td width="10"><img src="http://medyk.org/colors/4e4e4e.png" /></td>
    <td>240</td><td width="10"><img src="http://medyk.org/colors/585858.png" /></td>
    <td>241</td><td width="10"><img src="http://medyk.org/colors/626262.png" /></td>
    <td>242</td><td width="10"><img src="http://medyk.org/colors/6c6c6c.png" /></td>
    <td>243</td><td width="10"><img src="http://medyk.org/colors/767676.png" /></td>
  </tr>
  <tr>
    <td>244</td><td width="10"><img src="http://medyk.org/colors/808080.png" /></td>
    <td>245</td><td width="10"><img src="http://medyk.org/colors/8a8a8a.png" /></td>
    <td>246</td><td width="10"><img src="http://medyk.org/colors/949494.png" /></td>
    <td>247</td><td width="10"><img src="http://medyk.org/colors/9e9e9e.png" /></td>
    <td>248</td><td width="10"><img src="http://medyk.org/colors/a8a8a8.png" /></td>
    <td>249</td><td width="10"><img src="http://medyk.org/colors/b2b2b2.png" /></td>
  </tr>
  <tr>
    <td>250</td><td width="10"><img src="http://medyk.org/colors/bcbcbc.png" /></td>
    <td>251</td><td width="10"><img src="http://medyk.org/colors/c6c6c6.png" /></td>
    <td>252</td><td width="10"><img src="http://medyk.org/colors/d0d0d0.png" /></td>
    <td>253</td><td width="10"><img src="http://medyk.org/colors/dadada.png" /></td>
    <td>254</td><td width="10"><img src="http://medyk.org/colors/e4e4e4.png" /></td>
    <td>255</td><td width="10"><img src="http://medyk.org/colors/eeeeee.png" /></td>
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
