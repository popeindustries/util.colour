var colour, expect, element;

// Make it work in node..
try {
  colour = require('../index.js');
  expect = require('expect.js');
// .. or browser
} catch (err) {
  colour = require('./util.colour');
  expect = window.expect;
}

describe('util.colour', function() {
  describe('toComponent()', function() {
    it('should return an object with 3 channels when passed an rbg colour string', function() {
      expect(colour.toComponent("rgb(255,255,255)")).to.eql({
        r: 255,
        g: 255,
        b: 255
      });
    });
    it('should return an object with 3 channels when passed an rbg colour string including spaces', function() {
      expect(colour.toComponent("rgb(255, 255, 255)")).to.eql({
        r: 255,
        g: 255,
        b: 255
      });
    });
    it('should return an object with 3 channels when passed a hex string 6 characters long', function() {
      expect(colour.toComponent("#ffffff")).to.eql({
        r: 255,
        g: 255,
        b: 255
      });
    });
    it('should return an object with 3 channels when passed a hex string 3 characters long', function() {
      expect(colour.toComponent("#fff")).to.eql({
        r: 255,
        g: 255,
        b: 255
      });
    });
  });
  describe('rgba()', function() {
    it('should return an rgba string when passed an rgb colour string and alpha value', function() {
      expect(colour.rgba("rgb(255,255,255)", 0.5)).to.eql('rgba(255,255,255,0.5)');
    });
    it('should return an rgba string when passed an rgb colour string, including spaces, and alpha value', function() {
      expect(colour.rgba("rgb(255, 255, 255)", 0.5)).to.eql('rgba(255,255,255,0.5)');
    });
    it('should return an rgba string when passed a hex string 6 characters long and alpha value', function() {
      expect(colour.rgba("#ffffff", 0.5)).to.eql('rgba(255,255,255,0.5)');
    });
    it('should return an rgba string when passed a hex string 3 characters long and alpha value', function() {
      expect(colour.rgba("#fff", 0.5)).to.eql('rgba(255,255,255,0.5)');
    });
  });
});
