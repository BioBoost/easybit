class EasyBit {

  static set(original, bitPosition) {
    return (original | (0x01 << bitPosition));
  }

  static clear(original, bitPosition) {
    return (original & (~(0x01 << bitPosition)));
  }

  static toggle(original, bitPosition) {
    return (original ^ (0x01 << bitPosition));
  }

}

module.exports = EasyBit;