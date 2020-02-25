import {models} from '../../models'

const get = async (req, res, next) => {
    //사용자 조회
    try {
        // GET /v1/users/1 -> params
        // GET /v1/user?id=1 -> qurey
        // 특정 사용자 조회
        if(req.params.id){
            const user = await models.NotePad.findOne(
                {
                    where : {
                        id : req.params.id
                    }
                }
            );

            if(!user) {
                return res.status(404)
                    .json({message:'사용자를 찾을 수 없습니다.'})
            }

            return res.status(200)
                .json({user})
        }

        // 모든 사용자 조회
        const users = await models.NotePad.findAll()
        return res.status(200)
            .json({ users })

    } catch (err) {
        next(err)
    }
};

const post = async (req, res , next) => {
    //create
    try {
        const user = await models.NotePad.create(
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
                    message: '사용자를 생성하였습니다.',
                    user
                }
            )
    } catch (err) {
        next(err)
    }
};

const put = async (req,res,next) => {
    //update
    try{
        const user = await models.NotePad.findOne({
            where : {
                id: req.params.id
            }
        });

        if(user){
            return res.status(404)
                .json({message : ' 사용자를 찾을 수 없습니다.'})
        }

        user.password = req.body.password;
        await user.save();

        return res.status(200)
            .json({message : '사용자 정보를 수정하였습니다',user})
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
    post,
    put,
    remove
}