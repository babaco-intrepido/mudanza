import { getImagePath } from './OgTags';

describe('OgTags', () => {
  describe('getImagePath', () => {
    it('from relative URL', () => {
      expect(getImagePath('/images/pirulo.jpg')).toEqual('/images/pirulo.jpg');
    });

    it('from absolute URL without protocol', () => {
      expect(getImagePath('dominio.com/images/pirulo.jpg')).toEqual(
        '/images/pirulo.jpg'
      );
    });

    it('from absolute URL with protocol', () => {
      expect(getImagePath('https://dominio.com/images/pirulo.jpg')).toEqual(
        '/images/pirulo.jpg'
      );
    });

    it('from undefined', () => {
      expect(getImagePath(undefined)).toEqual('/img.jpg');
    });
  });
});
