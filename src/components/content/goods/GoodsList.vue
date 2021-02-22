<template>
  <div class="goods">
<!--    <goods-list-item v-for="item in goods" :goods-item="item"/>-->
    <div><h2>因接口原因，这里没有数据展示</h2></div>
    <ul>
      <li>Zhihaot1</li>
      <li>Zhihaot2</li>
      <li>Zhihaot3</li>
      <li>Zhihaot4</li>
      <li>Zhihaot5</li>
      <li>Zhihaot6</li>
      <li>Zhihaot7</li>
      <li>Zhihaot8</li>
      <li>Zhihaot9</li>
      <li>Zhihaot10</li>
      <li>Zhihaot11</li>
      <li>Zhihaot12</li>
      <li>Zhihaot13</li>
      <li>Zhihaot14</li>
      <li>Zhihaot15</li>
      <li>Zhihaot16</li>
      <li>Zhihaot17</li>
      <li>Zhihaot18</li>
      <li>Zhihaot19</li>
      <li>Zhihaot20</li>
      <li>Zhihaot21</li>
      <li>Zhihaot22</li>
      <li>Zhihaot23</li>
      <li>Zhihaot24</li>
      <li>Zhihaot25</li>
      <li>Zhihaot26</li>
      <li>Zhihaot27</li>
      <li>Zhihaot28</li>
      <li>Zhihaot29</li>
      <li>Zhihaot30</li>
      <li>Zhihaot31</li>
      <li>Zhihaot32</li>
      <li>Zhihaot33</li>
      <li>Zhihaot34</li>
      <li>Zhihaot35</li>
      <li>Zhihaot36</li>
      <li>Zhihaot37</li>
      <li>Zhihaot38</li>
      <li>Zhihaot39</li>
      <li>Zhihaot40</li>
      <li>Zhihaot41</li>
      <li>Zhihaot42</li>
      <li>Zhihaot43</li>
      <li>Zhihaot44</li>
      <li>Zhihaot45</li>
      <li>Zhihaot46</li>
      <li>Zhihaot47</li>
      <li>Zhihaot48</li>
      <li>Zhihaot49</li>
      <li>Zhihaot50</li>
      <li>Zhihaot51</li>
      <li>Zhihaot52</li>
      <li>Zhihaot53</li>
      <li>Zhihaot54</li>
      <li>Zhihaot55</li>
      <li>Zhihaot56</li>
      <li>Zhihaot57</li>
      <li>Zhihaot58</li>
      <li>Zhihaot59</li>
      <li>Zhihaot60</li>
      <li>Zhihaot61</li>
      <li>Zhihaot62</li>
      <li>Zhihaot63</li>
      <li>Zhihaot64</li>
      <li>Zhihaot65</li>
      <li>Zhihaot66</li>
      <li>Zhihaot67</li>
      <li>Zhihaot68</li>
      <li>Zhihaot69</li>
      <li>Zhihaot70</li>
      <li>Zhihaot71</li>
      <li>Zhihaot72</li>
      <li>Zhihaot73</li>
      <li>Zhihaot74</li>
      <li>Zhihaot75</li>
      <li>Zhihaot76</li>
      <li>Zhihaot77</li>
      <li>Zhihaot78</li>
      <li>Zhihaot79</li>
      <li>Zhihaot80</li>
      <li>Zhihaot81</li>
      <li>Zhihaot82</li>
      <li>Zhihaot83</li>
      <li>Zhihaot84</li>
      <li>Zhihaot85</li>
      <li>Zhihaot86</li>
      <li>Zhihaot87</li>
      <li>Zhihaot88</li>
      <li>Zhihaot89</li>
      <li>Zhihaot90</li>
      <li>Zhihaot91</li>
      <li>Zhihaot92</li>
      <li>Zhihaot93</li>
      <li>Zhihaot94</li>
      <li>Zhihaot95</li>
      <li>Zhihaot96</li>
      <li>Zhihaot97</li>
      <li>Zhihaot98</li>
      <li>Zhihaot99</li>
      <li>Zhihaot100</li>
    </ul>
  </div>
</template>

<script>
import GoodsListItem from "@/components/content/goods/GoodsListItem";
export default {
  name: "GoodsList",
  components: {
    GoodsListItem
  },
  props: {
    goods: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
.goods {
  /* 水平分布 均等分布 */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

</style>
