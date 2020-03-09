import {models} from '../../models'

//select all
const get = async (req, res, next) => {
    try {
        const notePads = await models.NotePad.findAll();
        return res.status(200).json({ notePads });
    } catch (err) {
        next(err);
    }
};
//select by id
const getById = async (req, res, next) => {
    if(req.params.id) {
        const notepad = await models.NotePad.findOne(
            {
                where : {
                    id : req.params.id
                }
            });
        if(!notepad) {
            return res.status(404).json({message:'사용자를 찾을 수 없습니다.'});
        }
        return res.status(200).json({ notepad })
    } else {
        throw Error("no id");
    }
};

const post = async (req, res , next) => {
    //create
    try {
        const notepad = await models.NotePad.create(
            {
                title: req.body.title,
                noteWrite: req.body.noteWrite,
                password: req.body.password,
                writer: req.body.writer
            }
        );
        return res.status(201)
            .json(
                {
                    message: '게시글을 생성하였습니다.',
                    notepad
                }
            )
    } catch (err) {
        next(err)
    }
};

const put = async (req,res,next) => {
    //update
    try{
        const notepad = await models.NotePad.findOne({
            where : {
                id: req.params.id
            }
        });

        if(!notepad){
            return res.status(404)
                .json({message : ' 사용자를 찾을 수 없습니다.'})
        }

        notepad.noteWrite = req.body.noteWrite;
        await notepad.save();

        return res.status(200)
            .json({message : '사용자 정보를 수정하였습니다',notepad})
    }catch(err){
        next(err)
    }
};

const remove = async (req, res, next) => {
    try{
        await models.NotePad.destroy({
            where : {
                id : req.params.id
            }
        });
        return res.status(200)
            .json({message:'사용자를 삭제 했습니다.'})
    }catch(err){
        next(err)
    }
};


export {
    get,
    getById,
    post,
    put,
    remove
}