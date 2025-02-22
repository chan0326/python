
from dataclasses import dataclass


@dataclass
class DataSets:
    _context: str  = ""
    _fname: str = "" # file name
    _dname: str = "" # data name
    _sname: str = "" # save name
    _train: object  = None
    _test: object = None
    _id: str = ""
    _label: str = ""

    @property
    def context(self) -> str: return self._context
   
    @context.setter
    def context(self, context): self._context = context
   
    @property
    def fname(self) -> str: return self._fname
   
    @fname.setter
    def fname(self, fname): self._fname = fname

    @property
    def dname(self) -> str: return self._dname

    @dname.setter
    def dname(self, dname): self._dname = dname

    @property
    def sname(self) -> str: return self._sname

    @sname.setter
    def sname(self, sname): self._sname = sname

    @property
    def train(self) -> object: return self._train
   
    @train.setter
    def train(self, train): self._train = train
   
    @property
    def test(self) -> object: return self._test
   
    @test.setter
    def test(self, test): self._test = test
   
    @property
    def id(self) -> str: return self._id
   
    @id.setter
    def id(self, id): self._id = id
   
    @property
    def label(self) -> str: return self._label
   
    @label.setter
    def label(self, label): self._label = label

